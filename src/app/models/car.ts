export class Car {
    title: string = '';
    value : string = '';
    modelName: string = '';
    years: string[] = [];
    filteredYears?: string[] = []; // Optional property for filtered years
    icons: number[] = [];
    isHybrid: boolean = false;
    englishModelName: string = '';
  }