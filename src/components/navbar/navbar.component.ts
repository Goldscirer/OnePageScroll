import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  homeClick() {
    window.scrollTo(0, 0);
  }

  aboutClick() {
    window.scrollTo(0, window.innerHeight);
  }

  contactClick() {
    window.scrollTo(0, 2 * window.innerHeight);
  }

}
