import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { AppRoutingModule } from './app-routing.module';

import { ServersService } from './servers/servers.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGaurd } from './can-deactivate-guard.service';
import { ServerResolver } from './servers/server/server-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ServersService,
    AuthService,
    AuthGuard,
    CanDeactivateGaurd,
    ServerResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
