import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  @Input() pageParams;
  @Output() changeCurPage: EventEmitter<Number> = new EventEmitter();
  constructor() { }
  ngOnInit() {

  }
  getPageList(pageParams) {
    console.log(pageParams);
    let pageList = [];
    for (let i = 0; i < pageParams.allPage; i++) {
      pageList.push({
        pageNo: i + 1
      });
    }
    return pageList;
  }
  changePage(pageNo) {
    this.pageParams.curPage = pageNo;  /*当前页码*/
    this.changeCurPage.emit(this.pageParams.curPage);
  }

}
