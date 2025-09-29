import { Pipe, PipeTransform } from '@angular/core';

@Pipe({standalone: true, name: 'hybrid'})
export class HybridPipe implements PipeTransform {

  transform(value: string): string {
    if (value && value.includes('h') && !value.includes('posth') ) {
      let temp = value.slice(0, -1);
      temp += ' היברידי ';
      return temp;
    } else if (value.includes('post') && !value.includes('posth')) {
      let temp = value.replace('post', ' והלאה ');
      return temp;
    } else if (value.includes('posth')) {
      let temp = value.replace('posth', ' והלאה (היברידי) ');
      return temp;
    } else if (value.includes('electric')) {
      let temp = value.replace('electric', ' חשמלי ');
      return temp;
    } else if (value && value.length === 5 && value[4] === '+') {
      let temp = value.replace('+', ' והלאה ');
      return temp;
    } else {
      return value;
    }
  }

}
