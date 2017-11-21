import {Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  protected starts: boolean[];
  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();
  @Input()
  protected rating = 0;
  @Input()
  readonly: boolean = true;
  constructor() { }
  ngOnInit() {
    this.starts = [];
    for (let i = 1; i <= 5; i ++) {
      this.starts.push(i > this.rating);
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.starts = [];
    for (let i = 1; i <= 5; i ++) {
      this.starts.push(i > this.rating);
    }
  }

  clickStars(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
     /* this.ngOnInit();*/
      this.ratingChange.emit(this.rating);
    }

   }
}
