import { Component } from '@angular/core';


interface Car {
  value: string;
  text: string
}

interface Mazda {
  value : string,
  modelName: string,
  years: string[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public modelChoosen: boolean = false;
  public manufacturerChoosen: boolean = false;
  public yearChoosen: boolean = false;
  title = 'WarningLightsApp';
  selectedValue: string;
  selectedCar: string;
  selectedModel: string;
  selectedYears: string;
  mazdaCarsYears: any[] = [];


  cars: Car[] = [
    {value: "1", text: "אאודי"},
    {value: "227", text: "אברת'"},
    {value: "2", text: "אוטוביאנקי"},
    {value: "3", text: "אולדסמוביל"},
    {value: "4", text: "אוסטין"},
    {value: "5", text: "אופל"},
    {value: "195", text: "אינפיניטי"},
    {value: "264", text: "אל.טי.איי"},
    {value: "6", text: "אלפא רומיאו"},
    {value: "203", text: "אם. ג'י. / MG"},
    {value: "250", text: "אסטון מרטין"},
    {value: "7", text: "ב.מ.וו"},
    {value: "8", text: "ביואיק"},
    {value: "315", text: "בנטלי"},
    {value: "325", text: "ג'י.איי.סי/GAC"},
    {value: "10", text: "ג'יאו - Geo"},
    {value: "296", text: "ג'יפ / Jeep"},
    {value: "238", text: "גרייט וול"},
    {value: "255", text: "דאצ'יה"},
    {value: "11", text: "דודג'"},
    {value: "290", text: "די.אס / DS"},
    {value: "12", text: "דייהו"},
    {value: "13", text: "דייהטסו"},
    {value: "14", text: "הונדה"},
    {value: "15", text: "וולוו"},
    {value: "16", text: "טויוטה"},
    {value: "321", text: "טסלה"},
    {value: "18", text: "יגואר"},
    {value: "19", text: "יונדאי"},
    {value: "20", text: "לאדה"},
    {value: "156", text: "לינקולן"},
    {value: "297", text: "ליצ'י"},
    {value: "284", text: "למבורגיני"},
    {value: "21", text: "לנצ'יה"},
    {value: "163", text: "לקסוס"},
    {value: "22", text: "מאזדה"},
    {value: "224", text: "מזראטי"},
    {value: "187", text: "מיני"},
    {value: "23", text: "מיצובישי"},
    {value: "24", text: "מרצדס"},
    {value: "25", text: "ניסאן"},
    {value: "286", text: "ננג'ינג"},
    {value: "26", text: "סאאב"},
    {value: "278", text: "סאנגיונג"},
    {value: "319", text: "סאנשיין"},
    {value: "27", text: "סובארו"},
    {value: "28", text: "סוזוקי"},
    {value: "29", text: "סיאט"},
    {value: "30", text: "סיטרואן"},
    {value: "32", text: "סמארט"},
    {value: "31", text: "סקודה"},
    {value: "34", text: "פולקסווגן"},
    {value: "35", text: "פונטיאק"},
    {value: "36", text: "פורד"},
    {value: "37", text: "פורשה"},
    {value: "38", text: "פיאט"},
    {value: "33", text: "פיג'ו"},
    {value: "225", text: "פרארי"},
    {value: "39", text: "קאדילק"},
    {value: "40", text: "קיה"},
    {value: "41", text: "קרייזלר"},
    {value: "42", text: "רובר"},
    {value: "43", text: "רנו"},
    {value: "44", text: "שברולט"}
  ];

  mazda: Mazda[] = [
    {value: "1", modelName: "121", years: ['1996-2002']},
    {value: "2", modelName: "2", years: ['1996-1999','2000-2006','2007-2014','2015+']},
    {value: "4", modelName: "3", years: ['2004-2008', '2009-2012', '2013+']},
    {value: "6", modelName: "323 לאנטיס", years: ['1999-2004']},
    {value: "7", modelName: "5", years: ['2006-2010','2011-2015']},    
    {value: "8", modelName: "6", years: ['2003-2007','2008-2012','2013+']},
    {value: "9", modelName: "626", years: ['1998-2002']},
    {value: "10", modelName: "CX-30/CX-3", years: ['2018+']},
    {value: "11", modelName: "MPV", years: ['2000-2007']},
    {value: "13", modelName: "MX-5", years: ['2006-2012','2015+']},
    {value: "15", modelName: "RX-8", years: ['2003-2012']},
    {value: "16", modelName: "דמיו", years: ['2015-2019+']},
    {value: "17", modelName: "פרמסי", years: ['2001-2005']},
    {value: "18", modelName: "קסדוס", years: ['1997-2002']}
  ] 

  manufacturerChosen(manufacturer: string) {
    let temp = manufacturer;
    this.manufacturerChoosen = true;
  }

  modelChosen(model: any) {
    this.mazdaCarsYears = [];
    let temp = model;
    this.modelChoosen = true;
    let temp2 = this.mazda.find(c => c.modelName === model.target.value);
    if (temp2 ) {
      temp2.years.forEach(year => {
        this.mazdaCarsYears.push(year);
      })
    }
  }

  yearChosen(year) {
    this.yearChoosen = true;
  }
}
