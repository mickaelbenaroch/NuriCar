import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hybrid'
})
export class HybridPipe implements PipeTransform {

  transform(value: string): string {
    if (value && value.includes('h')) {
      let temp = value.slice(0, -1);
      temp += ' היבריד ';
      return temp;
    } else {
      return value;
    }
  }

}
