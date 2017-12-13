import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  private products: Product[];
  private keyword: string;
  public inputValue: string;
  // private titleFilter: FormControl = new FormControl();
  constructor(private ProductService: ProductService) {
    // this.titleFilter.valueChanges.debounceTime(500).subscribe(
    //   value => this.keyword = value
    // );
  }
  public pageAllData = this.ProductService.getProducts().length; /*总数据数*/
  public pageSize = 6; /*每页显示数据条数*/
  public pageOneData = this.pageSize; /*每页显示数据*/
  public allPage = Math.ceil(this.pageAllData / this.pageSize); /*总页数*/
  public curPage = 1; /*当前页码*/
  public _console(value) {
    this.keyword = value;
  }
  ngOnInit() {
    this.products = this.ProductService.getProducts();
  }
  getPageData(event) {
    this.curPage = event;
    this.pageSize = this.pageOneData * event;
  }
}


