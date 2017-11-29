import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  formModel: FormGroup;
  categogries: string[];
  constructor(fb: FormBuilder, private productService: ProductService) {
    this.formModel = fb.group({
      productTitle: ['', Validators.minLength(3)],
      productPrice: [null, this.productPriceValidator],
      productCategory: ['-1']
    });
  }
  ngOnInit() {
    this.categogries = this.productService.getAllCategory();
  }
  productPriceValidator(control: FormControl): any {
    if (!control.value) {
      return null;
    }
    let proprice = parseInt(control.value);
    if (proprice > 0) {
      return null;
    }else {
      return {price: true};
    }
  }

  onSubmit() {
    if (this.formModel.valid) {
      /*当满足了所有的校验结果*/
      console.log('提交的值是：' + JSON.stringify(this.formModel.value));
    }
  }

}
