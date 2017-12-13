import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  array = [1, 2, 3];

  ngOnInit() {
    setTimeout(_ => {
      this.array = [1, 2, 3, 4];
    }, 500);
  }
}
