import { Injectable, OnInit } from '@angular/core';
/*import { HttpClient } from '@angular/common/http';*/
import {Observable} from 'rxjs/Observable';
@Injectable()
export class ProductService implements OnInit {
  private products: Product[] = [
    new  Product(1, 'title1', 12, 3, 'ok', [ 'online', '前端']),
    new  Product(2, 'title2', 9.9, 5, 'description', [ 'online', '前端']),
    new  Product(3, 'title3', 9.9, 1, 'now', [ 'online', '前端']),
    new  Product(4, 'title4', 9.9, 4, 'past', [ 'online', '前端']),
    new  Product(5, 'title5', 9.9, 2, 'high', [ 'online', '前端']),
    new  Product(6, 'title6', 9.9, 3, 'yes', [ 'online', '前端']),
    new  Product(7, 'title7', 9.9, 2, 'high', [ 'online', '后台']),
    new  Product(8, 'title8', 9.9, 3, 'yes', [ 'online', '后台']),
    new  Product(9, '66是', 9.9, 3, 'yes', [ 'online', '后台']),
    new  Product(10, '100', 9.9, 3, 'yes', [ 'online', '后台']),
    new  Product(11, '111', 9.9, 3, 'yes', [ 'online', '后台']),
    new  Product(12, '12', 9.9, 3, 'yes', [ 'online', '后台']),
    new  Product(13, '13', 9.9, 3, 'yes', [ 'online', '后台']),
    new  Product(14, '14', 9.9, 3, 'yes', [ 'online', '后台']),
    new  Product(15, '15', 9.9, 3, 'yes', [ 'online', '后台']),
    new  Product(16, '16', 9.9, 3, 'yes', [ 'online', '后台']),
    new  Product(17, '17', 9.9, 3, 'yes', [ 'online', '后台']),
    new  Product(18, '18', 9.9, 3, 'yes', [ 'online', '后台']),
  ];
  private comments: Comment[] = [
    new Comment(1, 1, '2017-11-20-14:30', 'daniel', 3, '666'),
    new Comment(2, 1, '2017-11-20-14:35', 'daniel', 4, 'ssss'),
    new Comment(3, 1, '2017-11-20-14:35', 'daniel', 3, 'good'),
    new Comment(4, 1, '2017-11-20-14:35', 'daniel', 2, '999'),
    new Comment(1, 2, '2017-11-20-14:30', 'daniel', 3, '嗯哼'),
  ];
  constructor() {
  }
  ngOnInit() {
  }
  /*getProducts(): Observable<Product> {
    return this.http.get('/api/products').map(res => JSON.stringify(res));
  }
  getProduct(id: number): Observable<Product> {
    // return this.products.find((product) => product.id === +id);
    return this.http.get('/api/products/' + id).map(res => JSON.stringify(res));
  }
  getCommentByProduct(id: number): Observable<Comment> {
   /!*return this.comments.filter((comments: Comment) => comments.productId === +id );*!/
     return this.http.get('/api/products/' + id + '/comments').map(res => JSON.stringify(res));
  }*/
  getProducts(): Product[] {
    return this.products;
  }
  getProduct(id: number): Product {
    return this.products.find((product) => product.id === +id);
  }
  getCommentByProduct(id: number): Comment[] {
    return this.comments.filter((comments: Comment) => comments.productId === +id);
  }
  getAllCategory() {
    return ['online', '后台', '前端'];
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
    public categories: Array<string>) {
  }
}
/*评论信息*/
export  class  Comment {
  constructor(
    public id: number,
    public productId: number,
    public times: string,
    public  user: string,
    public  rating: number,
    public  content: string) {
  }
}
