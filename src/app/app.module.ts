import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JwtModule} from "@auth0/angular-jwt";
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SetupComponent } from './setup/setup.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FrontpageComponent } from './home/frontpage/frontpage.component';
import { AdminHeaderComponent } from './admin/inc/admin-header/admin-header.component';
import { SidebarComponent } from './admin/inc/sidebar/sidebar.component';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { HeaderComponent } from './home/inc/header/header.component';
import { FooterComponent } from './home/inc/footer/footer.component';
import { CategoryComponent } from './home/category/category.component';
import { ForumComponent } from './home/forum/forum.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    SetupComponent,
    DashboardComponent,
    FrontpageComponent,
    AdminHeaderComponent,
    SidebarComponent,
    AccountsComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem("token"),
        allowedDomains: [window.location.host]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
