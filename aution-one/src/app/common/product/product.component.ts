import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  constructor() { }

  ngOnInit() {
    this.products = [
      new  Product(1, 'title1', 9.9, 0.3, 'description', [ 'online', '前端']),
      new  Product(2, 'title2', 9.9, 0.3, 'description', [ 'online', '前端']),
      new  Product(3, 'title3', 9.9, 0.3, 'description', [ 'online', '前端']),
      new  Product(4, 'title4', 9.9, 0.3, 'description', [ 'online', '前端']),
      new  Product(5, 'title5', 9.9, 0.3, 'description', [ 'online', '前端']),
      new  Product(6, 'title6', 9.9, 0.3, 'description', [ 'online', '前端']),
    ];
  }
}

/*产品信息*/
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {
  }
}
