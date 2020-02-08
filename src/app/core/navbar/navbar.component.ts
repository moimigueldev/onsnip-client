import { Component, OnInit } from '@angular/core';
import { StyleService } from 'src/app/services/style/style.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private styleService: StyleService
  ) { }

  ngOnInit(): void {
    this.styleService.addDashboardPageClass();
  }


  logout(): void {
    console.log('login out')
  }

  ngOnDestroy(): void {
    this.styleService.clearClassList();
  }
}
