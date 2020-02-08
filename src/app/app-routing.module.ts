import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserCookieGuard } from './core/guards/welcome/user-cookie.guard';
import { RedirectGuard } from './core/guards/redirect/redirect.guard';
import { DashboardGuard } from './core/guards/dashboard/dashboard.guard';


const routes: Routes = [
  { path: '', component: WelcomeComponent, canActivate: [UserCookieGuard] },
  { path: 'redirect', component: RedirectComponent, canActivate: [RedirectGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [DashboardGuard] },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
