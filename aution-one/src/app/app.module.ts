import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SliderComponent } from './common/slider/slider.component';
import { StarsComponent } from './common/stars/stars.component';
import { SearchComponent } from './common/search/search.component';
import { ProductComponent } from './common/product/product.component';
import {AppRoutingModule} from './app-routing.modules';
import { ProductDeatailComponent } from './common/product-deatail/product-deatail.component';
import { HomeComponent } from './common/home/home.component';
import {ProductService} from './common/shared/product.service';
import { PageListComponent } from './common/page-list/page-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { StockComponent } from './stock/stock.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    StarsComponent,
    SearchComponent,
    ProductDeatailComponent,
    HomeComponent,
    PageListComponent,
    FilterPipe,
    StockComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
