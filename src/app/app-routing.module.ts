import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserCookieGuard } from './core/guards/user-cookie.guard';


const routes: Routes = [
  { path: '', component: WelcomeComponent, canActivate: [UserCookieGuard] },
  { path: 'redirect', component: RedirectComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
