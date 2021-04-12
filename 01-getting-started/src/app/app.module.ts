import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './assignment01/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './assignment01/success-alert/success-alert.component';
import { Assignment01Component } from './assignment01/assignment01.component';
import { Assignment02Component } from './assignment02/assignment02.component';
import { Assignment03Component } from './assignment03/assignment03.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Assignment01Component,
    Assignment02Component,
    Assignment03Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 