import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SetupComponent} from "./setup/setup.component";
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {FrontpageComponent} from "./home/frontpage/frontpage.component";
import {AccountsComponent} from "./admin/accounts/accounts.component";
import {CategoryComponent} from "./home/category/category.component";
import {ForumComponent} from "./home/forum/forum.component";

/*
  All routes for codebase, will be going here. But two of the routes are parents
  for many other routes, so home and admin does both, has children which means
  that, they will have a lot of routes in them.
 */
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'setup', component: SetupComponent},
  {path: 'home', pathMatch: 'full', redirectTo: 'home/frontpage'},
  {path: 'home', component: HomeComponent, children: [
    /*
    Routes for home will be going in here.
     */
      {path: 'frontpage', component: FrontpageComponent},
      {path: 'category/:type_id', component: CategoryComponent},
      {path: 'forum/:id', component: ForumComponent}
    ]},
  {path: 'admin', pathMatch: 'full', redirectTo: 'admin/dashboard'},
  {path: 'admin', component: AdminComponent, children: [
    /*
    Routes for admin will be going in here.
     */
      {path: 'dashboard', component: DashboardComponent},
      {path: 'accounts', component: AccountsComponent},
      {path: 'accounts/:role', component: AccountsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
