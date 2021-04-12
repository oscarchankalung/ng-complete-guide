import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

import { Post } from "./post.model";

@Injectable({ providedIn: "root" })
export class PostsService {
  updatedSubject = new Subject<Post[]>();
  errorSubject = new Subject<HttpErrorResponse>();
  api =
    "https://ng-complete-guide-fe7ba-default-rtdb.firebaseio.com/posts.json";

  constructor(private http: HttpClient) {}

  createAndSavePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http.post<{ name: string }>(
        this.api,
        postData,
        {
          observe: 'response'
        }
      )
      .subscribe(
      (responseData) => {
        console.log(responseData);
        this.fetchPosts();
      },
      (error) => {
        this.errorSubject.next(error);
      }
    );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    this.http
      .get<{ [key: string]: Post }>(
        this.api,
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
          params: searchParams,
          responseType: 'json'
        }
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError(error => {
          // Send to analytics server
          return throwError(error)
        })
      )
      .subscribe(
        (posts) => {
          this.updatedSubject.next(posts);
        },
        (error) => {
          this.errorSubject.next(error);
        }
      );
  }

  deletePosts() {
    this.http.delete(
        this.api,
        {
          observe: 'events',
          responseType: 'text'
        }
      )
      .pipe(
        tap(event => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            console.log('sent');
          }
          if (event.type === HttpEventType.Response) {
            console.log('response body:', event.body);
          }
        })
      )
      .subscribe(
      () => {
        this.fetchPosts();
      },
      (error) => {
        this.errorSubject.next(error);
      }
    );
  }
}
