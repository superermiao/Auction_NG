import { Component } from '@angular/core';
import {PriceQute} from './stock/stock.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  stockInfo: PriceQute = new PriceQute('', 0) ;
  priceQuteHandle(event: PriceQute) {/*event类型就是子组件发射的类型*/
    this.stockInfo = event;
  }
}
