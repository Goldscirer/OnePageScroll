import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-arrow',
  templateUrl: './scroll-arrow.component.html',
  styleUrls: ['./scroll-arrow.component.scss']
})
export class ScrollArrowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arrowClick() {
    window.scrollTo(0, window.innerHeight);
  }
}
