import { Injectable } from "@angular/core";
import { CountService } from "./count.service";

@Injectable()
export class UsersService {
  activeUsers: string[] = ['Max', 'Anna'];
  inactiveUsers: string[] = ['Chris', 'Manu'];

  constructor(private countService: CountService) {}

  setToInactive(id: number) {
    const user = this.activeUsers[id];
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.countService.logAction(`User "${user}" is set to inactive.`);
  }

  setToActive(id: number) {
    const user = this.inactiveUsers[id];
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.countService.logAction(`User "${user}" is set to active.`);
  }
}