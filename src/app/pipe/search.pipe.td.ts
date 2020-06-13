import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.user.name.first.toLowerCase().indexOf(filter.toLowerCase()) !== -1) ||
      items.filter(item => item.user.name.last.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}
