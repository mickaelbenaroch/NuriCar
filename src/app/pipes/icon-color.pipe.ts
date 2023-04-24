import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'iconColor'
})
export class IconColorPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}

    transform(value: string) {
        let response = '';
        if (value && !value.includes('?')) {
            const isMulti = value.split(',')[0] ?? false;
            if (isMulti) {
                let colorsFinish = [];
                let colors = value.split(',');
                colors = colors.map(c => c.trim());
                colors.forEach(col => {
                    switch(col) {
                        case 'red':
                            colorsFinish.push('אדום');
                            break;
                        case 'green':
                            colorsFinish.push('ירוק');
                            break;
                        case 'orange':
                            colorsFinish.push('כתום');
                            break;
                        case 'blue':
                            colorsFinish.push('כחול');
                            break;
                        case 'white':
                            colorsFinish.push('לבן');
                            break;
                        case 'grey':
                            colorsFinish.push('אפור');
                            break;
                    }
                });
                for (let i = 0; i < colorsFinish.length; i++) {
                    if (i !== colorsFinish.length -1) {
                        response += `<span style="color: ${colors[i]}; font-weight: bold;">${colorsFinish[i]}</span>` + `<span> או </span>`;
                    } else {
                        response += `<span style="color: ${colors[i]}; font-weight: bold;">${colorsFinish[i]}</span>`;
                    }
                }
                return this.sanitizer.bypassSecurityTrustHtml(response);
            } else {
                value = value.trim();
                let finishvalue = '';
                switch(value) {
                    case 'red':
                        finishvalue = 'אדום';
                        break;
                    case 'green':
                        finishvalue = 'ירוק';
                        break;
                    case 'orange':
                        finishvalue = 'כתום';
                        break;
                    case 'blue':
                        finishvalue = 'כחול';
                        break;
                    case 'white':
                        finishvalue = 'לבן';
                        break;
                    case 'grey':
                        finishvalue = 'אפור';
                        break;
                    default:
                        finishvalue = '(יתכן שהנורה קיימת במספר צבעים, לרוב אדומה)';
                        break;    
                }
                response = `<span style="color: ${value}; font-weight: bold;">${finishvalue}</span>`
                return this.sanitizer.bypassSecurityTrustHtml(response);
            }
        }
        response = `<span></span>`
        return this.sanitizer.bypassSecurityTrustHtml(response);
    }

}