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

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    StarsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
