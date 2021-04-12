import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { Post } from "./post.model";
import { PostsService } from "./posts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "Test";
  content = "Test content";
  loadedPosts: Post[] = [];
  isFetching = false;
  errors: HttpErrorResponse[] = [];
  private udpatedSubscription: Subscription;
  private errorSubscription: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.fetchPost();
    this.udpatedSubscription = this.postsService.updatedSubject.subscribe(
      (posts: Post[]) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      }
    );
    this.errorSubscription = this.postsService.errorSubject.subscribe(
      (error: HttpErrorResponse) => {
        this.errors.push(error);
      }
    );
  }

  ngOnDestroy() {
    this.udpatedSubscription.unsubscribe();
    this.errorSubscription.unsubscribe();
  }

  onCreatePost(postData: Post) {
    this.isFetching = true;
    this.postsService.createAndSavePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.fetchPost();
  }

  onClearPosts() {
    this.isFetching = true;
    this.postsService.deletePosts();
  }

  onHandleError(index: number) {
    this.errors.splice(index, 1);
  }

  private fetchPost() {
    this.isFetching = true;
    this.postsService.fetchPosts();
  }
}
