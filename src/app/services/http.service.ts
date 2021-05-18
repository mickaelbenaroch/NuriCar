import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public readonly baseUrl: string = "https://yossi-deliveries-api.vercel.app/";
  constructor(private httpsClient: HttpClient) {
   }

  get(api: string): any {
    return this.httpsClient.get(this.baseUrl + api);
  }

  post(api: string, object: any): any {
    return this.httpsClient.post(this.baseUrl + api, object);
  }
}
