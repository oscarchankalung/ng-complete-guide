import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';
import { Assignment05Component } from './assignment05/assignment05.component';
import { ActiveUsersComponent } from './assignment05/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment05/inactive-users/inactive-users.component';
import { CountService } from './assignment05/count.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    Assignment05Component,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AccountsService, LoggingService, CountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
