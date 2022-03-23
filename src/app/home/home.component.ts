import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  constructor() { }

  @ViewChild('widgetsContent', { read: ElementRef }) widgetsContent: ElementRef<any>;

  scrollLeft() {
    this.widgetsContent.nativeElement.scrollTo({
      left: (-this.widgetsContent.nativeElement.scrollWidth),
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollTo({
      left: (this.widgetsContent.nativeElement.scrollWidth),
      behavior: 'smooth'
    });
  }
  ngOnInit(): void {
  }

}
