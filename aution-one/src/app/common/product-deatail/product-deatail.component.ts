import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductService, Comment} from '../shared/product.service';

@Component({
  selector: 'app-product-deatail',
  templateUrl: './product-deatail.component.html',
  styleUrls: ['./product-deatail.component.css']
})
export class ProductDeatailComponent implements OnInit {
  product: Product;
  comments: Comment[];
  newRating: number = 5;
  newComment: string = '';
  isCommentHidden: boolean = true;
  constructor(private  routeInfo: ActivatedRoute,
              private productService: ProductService) { }
  ngOnInit() {
    const productId: number = this.routeInfo.snapshot.params['productId'];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentByProduct(productId);
    console.log(this.product);
    console.log(this.comments);
  }
  addNewComment() {
    console.log('之前的评论数: ' + this.comments.length);
    console.log('之前的星星平均分：' + this.product.rating);
    console.log('之前的星星总分：' + this.product.rating * this.comments.length);
    let oneComment = new Comment (this.comments.length + 1, this.product.id, new Date().toISOString(), '嗯哼', this.newRating, this.newComment);
    this.comments.unshift(oneComment);
    console.log('之后的评论数: ' + this.comments.length);
    let sum = 0;
    for (let i = 0; i < this.comments.length; i++) {
      sum = sum + this.comments[i].rating;
    }
    console.log('之后的星星总分：' + sum);
    this.product.rating = sum / this.comments.length;
    console.log('之后的星星平均分：' + this.product.rating);
/*    const sum = this.comments.reduce((sum , comment.rating) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;
    console.log('之后的星星平均分：' + this.product.rating);*/
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }

}
