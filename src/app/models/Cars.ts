import { Car } from "./Car";

export class Cars {
    public mazda: Car[] = [
        {value: "1", modelName: "2", years: ['2007-2015','2015+'], icons: [28, 57], isHybrid: false, englishModelName: '2'},
        {value: "2", modelName: "3", years: ['2004-2008', '2009-2012', '2013+', '2020+'], icons: [20, 29, 61, 56], isHybrid: false, englishModelName: '3'},
        {value: "3", modelName: "5", years: ['2006-2010','2011-2017'], icons: [21, 25], isHybrid: false, englishModelName: '5'},    
        {value: "4", modelName: "6", years: ['2003-2008','2009-2012','2013+'], icons: [20, 25, 67], isHybrid: false, englishModelName: '6'},
        {value: "5", modelName: "626", years: ['1998-2002'], icons: [17], isHybrid: false, englishModelName: '626'},
        {value: "6", modelName: "cx30", years: ['2018+'], icons: [56], isHybrid: false, englishModelName: 'cx30'},
        {value: "7", modelName: "cx3", years: ['2018+'], icons: [67], isHybrid: false, englishModelName: 'cx3'},
        {value: "8", modelName: "cx5", years: ['2012-2016', '2016+'], icons: [45, 69], isHybrid: false, englishModelName: 'cx5'},
        {value: "9", modelName: "mpv", years: ['2000-2007'], icons: [18], isHybrid: false, englishModelName: 'mpv'},
        {value: "10", modelName: "mx5", years: ['2000-2008','2009-2014','2015+'], icons: [22, 21, 46], isHybrid: false, englishModelName: 'mx5'}     
      ];
      public toyota: Car[] = [
        {value: "5", modelName: "CHR", years: ['2016post', 'hybrid', '2016posth'], icons: [55, 61], isHybrid: false, englishModelName: 'chr'},
        {value: "7", modelName: "אבלון", years: ['2005-2012', '2013-2018', '2019-2020', 'hybrid', '2013-2016h', '2017-2018h', '2019-2020h'], icons: [34, 35, 53, 51, 33, 36], isHybrid: true, englishModelName: 'evlon'},
        {value: "2", modelName: "אבנסיס", years: ['2009-2012', '2013-2015', '2016-2019'], icons: [25, 35, 38], isHybrid: false, englishModelName: 'avensis'},
        {value: "1", modelName: "אוריס", years: ['2008-2012','2013-2015','2016-2017','hybrid','2008-2011h', '2012-2014h', '2015-2018h'], icons: [27, 43, 52, 33, 60, 58], isHybrid: true, englishModelName: 'auris'},
        {value: "3", modelName: "אייגו", years: ['2012-2014','2015-2017','2018post'], icons: [20, 39, 40], isHybrid: false, englishModelName: 'aygo'},    
        {value: "8", modelName: "איילנדר", years: ['2011-2013', '2014-2016', '2017-2019', '2020post', 'hybrid', '2011-2013h', '2014-2016h', '2017-2019h', '2020posth'], icons: [31, 35, 42, 54, 30, 38, 41, 52 ], isHybrid: true, englishModelName: 'highlander'},
        {value: "12", modelName: "וורסו", years: ['2009-2013','2014-2018'], icons: [27, 37], isHybrid: false, englishModelName: 'verso'},
        {value: "13", modelName: "יאריס", years: ['2009-2012','2013-2014','2015-2017', '2018-2019', 'hybrid', '2012-2014h', '2015-2017h', '2018-2019h'], icons: [31, 32, 37, 56, 41, 40, 53], isHybrid: true, englishModelName: 'yaris'},
        {value: "9", modelName: "לנד קרוזר", years: ['2009-2013', '2014-2016', '2017post'], icons: [44, 55, 65], isHybrid: false, englishModelName: 'landcruiser'},
        {value: "10", modelName: "פריוס", years: ['2005-2009','2010-2015','2016-2018', '2019-2020'], icons: [34, 38, 53, 55], isHybrid: false, englishModelName: 'prius'},
        {value: "6", modelName: "קורולה", years: ['2003-2007', '2008-2012', '2013-2018', '2019post', 'hybrid', '2020post'], icons: [25, 42, 62, 63, 59], isHybrid: true, englishModelName: 'corolla'},
        {value: "4", modelName: "קמרי", years: ['2002-2006','2007-2012','2013-2014','2015-2017', '2018-2020', 'hybrid', '2007-2011h', '2012-2014h', '2015-2017h', '2018-2020h'], icons: [25, 32, 36, 37, 51, 28, 35, 34, 56], isHybrid: true, englishModelName: 'camry'},
        {value: "11", modelName: "ראב 4", years: ['2006-2012','2013-2015','2016-2018', '2019post', 'hybrid', '2016-2018h', '2019posth'], icons: [33, 43, 49, 55, 42, 53], isHybrid: true, englishModelName: 'rav4'},
      ];
      public alpha: Car[] = [];
      public audi: Car[] = [];
      public bmw: Car[] = [];
      public chevrolet: Car[] = [];
      public citroen: Car[] = [];
      public crysler: Car[] = [];
      public dacia: Car[] = [];
      public daewoo: Car[] = [];
      public dayatsu: Car[] = [];
      public fiat: Car[] = [];
      public ford: Car[] = [];
      public honda: Car[] = [];
      public hunday: Car[] = [
        {value: "1", modelName: "גטס", years: ['2001post'], icons: [22], isHybrid: false, englishModelName: 'getz'},
        {value: "2", modelName: "i10", years: ['2009-2013', '2014-2019', '2020post'], icons: [24, 34, 31], isHybrid: false, englishModelName: 'i10'},
        {value: "3", modelName: "i20", years: ['2009-2014', '2015-2019', '2020post'], icons: [27, 30, 34], isHybrid: false, englishModelName: 'i20'},
        {value: "4", modelName: "i25 אקסנט", years: ['2007-2011', '2012-2018', '2019post'], icons: [22, 28, 27], isHybrid: false, englishModelName: 'i25_accent'},
        {value: "5", modelName: "i30", years: ['2008-2011', '2012-2017', '2018post'], icons: [40, 29, 39], isHybrid: false, englishModelName: 'i30'},
        {value: "6", modelName: "i35 אלנטרה", years: ['2011-2015', '2016-2018', '2019post'], icons: [28, 37, 33], isHybrid: false, englishModelName: 'i35_alentra'},
        {value: "7", modelName: "i40", years: ['2011-2015'], icons: [37], isHybrid: false, englishModelName: 'i40'},
        {value: "8", modelName: "איוניק", years: ['2016-2019', '2020post', 'hybrid', '2016-2019h', '2020posth'], icons: [37, 34, 39, 34], isHybrid: true, englishModelName: 'ionic'},
        {value: "9", modelName: "ix35 טוסון", years: ['2010-2016'], icons: [32], isHybrid: false, englishModelName: 'ix35_tucson'},
        {value: "10", modelName: "קונה", years: ['2017post', 'hybrid', '2020posth'], icons: [43, 33], isHybrid: true, englishModelName: 'kone'},
        {value: "11", modelName: "סנטה פה", years: ['2007-2012', '2013-2018', '2019post'], icons: [25, 46, 33], isHybrid: false, englishModelName: 'santafe'},
        {value: "12", modelName: "סונטה", years: ['2006-2011', 'hybrid', '2015-2018h', '2018-2019h', '2020posth'], icons: [21, 40, 39, 30], isHybrid: true, englishModelName: 'sonte'},
        {value: "13", modelName: "טראקאן", years: ['2001-2007'], icons: [25], isHybrid: false, englishModelName: 'tarken'},
        {value: "14", modelName: "טוסון", years: ['2005-2010', '2015-2019', '2019post'], icons: [25, 29, 28], isHybrid: false, englishModelName: 'tucson'},
        {value: "15", modelName: "ולוסטר", years: ['2011-2016'], icons: [35], isHybrid: false, englishModelName: 'veloster'},
        {value: "16", modelName: "וניו", years: ['2020post'], icons: [25], isHybrid: false, englishModelName: 'venio'},
      ];
      public jeep: Car[] = [];
      public kia: Car[] = [
        {value: "6", modelName: "אופטימה", years: ['2012-2015','2016-2019', '2020post', 'hybrid', '2016-2019h', '2020posth'], icons: [29, 29, 26, 42, 35 ], isHybrid: true, englishModelName: 'optima'},
        {value: "15", modelName: "אקסיד", years: ['2019post'], icons: [34], isHybrid: false, englishModelName: 'xceed'},
        {value: "5", modelName: "נירו", years: ['2016-2020','2020post'], icons: [39, 33], isHybrid: false, englishModelName: 'niro'},
        {value: "11", modelName: "סול", years: ['2011-2013','2014-2018'], icons: [31, 34], isHybrid: false, englishModelName: 'soul'},
        {value: "10", modelName: "סורנטו", years: ['2003-2009','2010-2014','2015-2020', '2021post'], icons: [22, 32, 32, 33], isHybrid: false, englishModelName: 'sorento'},
        {value: "14", modelName: "סטוניק", years: ['2018post'], icons: [35], isHybrid: false, englishModelName: 'stonic'},
        {value: "13", modelName: "סטינגר", years: ['2018post'], icons: [29], isHybrid: false, englishModelName: 'stinger'},
        {value: "3", modelName: "סיד", years: ['2008-2009','2010-2012', '2013-2018', '2019-2020', 'hybrid', '2019posth'], icons: [25, 33, 32, 33, 35], isHybrid: true, englishModelName: 'ceed'},
        {value: "9", modelName: "סלטוס", years: ['2020post'], icons: [30], isHybrid: false, englishModelName: 'seltos'},
        {value: "12", modelName: "ספורטאז'", years: ['2008-2010','2011-2015','2016-2020','2020post'], icons: [31, 30, 30, 32], isHybrid: false, englishModelName: 'sportage'},
        {value: "4", modelName: "פורטה", years: ['2009-2012','2013-2016', '2017-2018', '2019-2021'], icons: [23, 26, 32, 34], isHybrid: false, englishModelName: 'forte'},
        {value: "7", modelName: "פיקנטו", years: ['2011-2016','2017-2020', '2020post'], icons: [40, 27, 35], isHybrid: false, englishModelName: 'picanto'},
        {value: "1", modelName: "קארנס", years: ['2007-2012','2013-2019'], icons: [30, 38], isHybrid: false, englishModelName: 'carens'},
        {value: "2", modelName: "קרניבל", years: ['2007-2012','2015-2020'], icons: [27, 36], isHybrid: false, englishModelName: 'carnival'},
        {value: "8", modelName: "ריו", years: ['2006-2011','2012-2017', '2018-2021', '2021post'], icons: [18, 27, 26, 27], isHybrid: false, englishModelName: 'rio'},
      ];
      public mercedes: Car[] = [];
      public mini: Car[] = [];
      public mistubishi: Car[] = [];
      public nissan: Car[] = [];
      public opel: Car[] = [];
      public peugeot: Car[] = [];
      public renault: Car[] = [];
      public rover: Car[] = [];
      public seat: Car[] = [];
      public skoda: Car[] = [];
      public smart: Car[] = [];
      public subaru: Car[] = [];
      public suzuki: Car[] = [];
      public volvo: Car[] = [];
      public wolswagen: Car[] = [];
} 