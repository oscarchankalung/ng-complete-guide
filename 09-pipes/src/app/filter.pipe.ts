import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, propName: string, filterString: string): any {
    if (filterString === '' || value.length === 0) {
      return value
    } else {
      const map = value.filter(item => { 
        return item[propName] === filterString
      })
      return map;
    }
  }

}
