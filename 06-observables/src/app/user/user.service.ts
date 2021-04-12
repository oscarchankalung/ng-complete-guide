import { Subject } from "rxjs";

export class UserService {
  activatedEmitter = new Subject<boolean>();
}