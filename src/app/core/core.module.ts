import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ListModule } from '../components/list/list.module';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { RedirectComponent } from '../components/redirect/redirect.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { TilesModule } from '../components/tiles/tiles.module';



@NgModule({
  declarations: [
    NavbarComponent,
    WelcomeComponent,
    RedirectComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    ListModule,
    TilesModule
  ]
})
export class CoreModule { }
