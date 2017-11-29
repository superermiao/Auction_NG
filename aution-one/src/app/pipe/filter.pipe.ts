import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 /* value:any 需要过滤的值   args?:any 根据哪一个字段去过滤*/
  transform(list: any[], filterField: string, keyword: string): any {
   if (!filterField || !keyword ) {
      return list;
   }else {
      return list.filter(item => {
          const filterValue = item[filterField];
          return filterValue.indexOf(keyword) >= 0;
        });
   }
  }

}
