import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(allRecipies: any[], SearchKey: string): any {
    let result: any[]
    if (!allRecipies || SearchKey == "") {
      return allRecipies
    }
    else {
      result = allRecipies.filter((item: any) => item.name.toLowerCase().trim().includes(SearchKey.toLowerCase().trim()))
      return result;
    }
  }

}
