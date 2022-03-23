import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  clicked = false;
  constructor() { }

  burger() {
    if (!this.clicked)
      this.clicked = true;
    else
      this.clicked = false;
  }

  ngOnInit(): void {
  }

}
