import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private temp = process.env.apiadress;
  private readonly baseUrl: string = "https://yossi-deliveries-api.vercel.app/";
  constructor(private httpsClient: HttpClient) {
    console.log('apiadrress: ' + this.temp);
   }

  get(api: string): any {
    return this.httpsClient.get(this.baseUrl + api);
  }

  post(api: string, object: any): any {
    return this.httpsClient.post(this.baseUrl + api, object);
  }
}
