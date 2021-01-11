import { Component, OnInit } from '@angular/core';
import { IconLevel } from './enums/icon-level';
import { Icon } from './models/icon';
import { IconServiceService } from './services/icon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor(public iconService: IconServiceService) {}

  ngOnInit(): void {
    this.iconService.iconDescriptionJson.push(new Icon("בלם יד", "מסמן שבלם היד (הנד-ברייקס) מורם ", "יש להוריד את בלם היד (הנד-ברייקס)", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("מצבר חלש", "מסמן שהמצבר חלש ", "יש לבדוק את המצבר ולבדוק שהוא לא ריק. ברוב המקרים אם הוא מעבר לשלוש שנים יש להחליף אותו", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("רמת שמן נמוכה", "מסמן שחסר שמן במנוע ", "יש לעצור מידת לחכות 10 דקות שהמנוע התקרר, לפתוח את מכסה המנוע, ולהוציא את מד השמן, במקרה וחסר יש למלא מיד ולבדוק שוב (מילוי בשמן מנוע מתאים)", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("בדוק מנוע", "מסמן שישנה תקלה כללית במנוע ", "יש ללכת למוסך לבדוק מה התקלה", null, IconLevel.Orange, null));
    this.iconService.iconDescriptionJson.push(new Icon("טיפול תחזוקה", "מסמן שהרכב צריך טיפול תחזוקה שעושיפ פעם בכמה אלפי קילומטר לפי הוראות יצרן ", "יש לקבוע תור למוסך לטיפול הבא ", null, IconLevel.Orange, null));
    this.iconService.iconDescriptionJson.push(new Icon("חום מנוע", "מסמן שהמנוע חם מדי ", "יש לעצור מיד, לחכות כ-10 דקות שהמנוע התקרר, לפתוח את המנוע, ולבדוק את רמת מי הקירור. במידה וחסר אז יש להוסיף עד הסמן של המקסימום. אפשר למלא מים במקום מי קירור באופן חד-פעמי ", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("ABS", "מסמן שמנגנון ההיי.בי.אס מופעל ", "יש לנסות לתת ברקס כמה פעמים ברציפות כדי לשחרר את מגננון ההיי.בי.אס", null, IconLevel.Orange, null));
    this.iconService.iconDescriptionJson.push(new Icon("כרית אוויר נוסע", "מסמן שכרית האוויר של הנוסע מנותק ", "יש למצוא את מנגנון ההפעלה של כרית האוויר של הנוסע ולהפעיל אותו אך ורק אם לא מותקן כסא תינוק מקדימה", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("", " ", "", null, null, null));
    this.iconService.iconDescriptionJson.push(new Icon("בלם יד", "מסמן שבלם היד (הנד-ברייקס) מורם ", "יש להוריד את בלם היד (הנד-ברייקס)", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("בלם יד", "מסמן שבלם היד (הנד-ברייקס) מורם ", "יש להוריד את בלם היד (הנד-ברייקס)", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("בלם יד", "מסמן שבלם היד (הנד-ברייקס) מורם ", "יש להוריד את בלם היד (הנד-ברייקס)", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("בלם יד", "מסמן שבלם היד (הנד-ברייקס) מורם ", "יש להוריד את בלם היד (הנד-ברייקס)", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("בלם יד", "מסמן שבלם היד (הנד-ברייקס) מורם ", "יש להוריד את בלם היד (הנד-ברייקס)", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("בלם יד", "מסמן שבלם היד (הנד-ברייקס) מורם ", "יש להוריד את בלם היד (הנד-ברייקס)", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("בלם יד", "מסמן שבלם היד (הנד-ברייקס) מורם ", "יש להוריד את בלם היד (הנד-ברייקס)", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("בלם יד", "מסמן שבלם היד (הנד-ברייקס) מורם ", "יש להוריד את בלם היד (הנד-ברייקס)", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("בלם יד", "מסמן שבלם היד (הנד-ברייקס) מורם ", "יש להוריד את בלם היד (הנד-ברייקס)", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("בלם יד", "מסמן שבלם היד (הנד-ברייקס) מורם ", "יש להוריד את בלם היד (הנד-ברייקס)", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("בלם יד", "מסמן שבלם היד (הנד-ברייקס) מורם ", "יש להוריד את בלם היד (הנד-ברייקס)", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("בלם יד", "מסמן שבלם היד (הנד-ברייקס) מורם ", "יש להוריד את בלם היד (הנד-ברייקס)", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("בלם יד", "מסמן שבלם היד (הנד-ברייקס) מורם ", "יש להוריד את בלם היד (הנד-ברייקס)", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("בלם יד", "מסמן שבלם היד (הנד-ברייקס) מורם ", "יש להוריד את בלם היד (הנד-ברייקס)", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("בלם יד", "מסמן שבלם היד (הנד-ברייקס) מורם ", "יש להוריד את בלם היד (הנד-ברייקס)", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("בלם יד", "מסמן שבלם היד (הנד-ברייקס) מורם ", "יש להוריד את בלם היד (הנד-ברייקס)", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("בלם יד", "מסמן שבלם היד (הנד-ברייקס) מורם ", "יש להוריד את בלם היד (הנד-ברייקס)", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("בלם יד", "מסמן שבלם היד (הנד-ברייקס) מורם ", "יש להוריד את בלם היד (הנד-ברייקס)", null, IconLevel.Red, null));
    this.iconService.iconDescriptionJson.push(new Icon("ווינקר מופעל", "מסמן שאחד מהווינקרים לפחות מופעל ", "יש לכבות את הווינקרים הדלוקים אם אין צורך בהם", null, IconLevel.Green, null));


  
  
  }

}
