import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'iconColor'
})
export class IconColorPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}

    transform(value: string) {
        let response = '';
        if (value) {
            const isMulti = value.split(',')[0] ?? false;
            if (isMulti) {
                let colorsFinish = [];
                let colors = value.split(',');
                colors = colors.map(c => c.trim());
                colors.forEach(col => {
                    switch(col) {
                        case 'red':
                            colorsFinish.push('קריטי');
                            break;
                        case 'green':
                            colorsFinish.push('לא קריטי');
                            break;
                        case 'orange':
                            colorsFinish.push('חמור');
                            break;
                        case 'blue':
                            colorsFinish.push('הודעה בלבד');
                            break;
                        case 'white':
                            colorsFinish.push('לא מוגדר');
                            break;
                        case 'grey':
                            colorsFinish.push('לא מוגדר');
                            break;
                    }
                });
                for (let i = 0; i < colorsFinish.length; i++) {
                    if (i !== colorsFinish.length -1) {
                        response += `<span style="color: ${colors[i]}">${colorsFinish[i]}</span>` + `<span> או </span>`;
                    } else {
                        response += `<span style="color: ${colors[i]}">${colorsFinish[i]}</span>`;
                    }
                }
            }
            return this.sanitizer.bypassSecurityTrustHtml(response);
        } else {
            value = value.trim();
            let finishvalue = '';
            switch(value) {
                case 'red':
                    finishvalue = 'קריטי';
                    break;
                case 'green':
                    finishvalue = 'לא קריטי';
                    break;
                case 'orange':
                    finishvalue = 'חמור';
                    break;
                case 'blue':
                    finishvalue = 'הודעה בלבד';
                    break;
                case 'white':
                    finishvalue ='לא מוגדר';
                    break;
                case 'grey':
                    finishvalue = 'לא מוגדר';
                    break;
                default:
                    finishvalue = '(יתכן שהנורה קיימת במספר צבעים, לרוב אדומה)';
                    break;    
            }
            response = `<span style="color: ${value}">${finishvalue}</span>`
            return this.sanitizer.bypassSecurityTrustHtml(response);
        }
    }

}