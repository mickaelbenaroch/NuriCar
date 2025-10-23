import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public readonly baseUrl: string = "https://nuricarapi.onrender.com/";
  constructor(private httpsClient: HttpClient) {
   }

  get<T>(api: string) {
    return this.httpsClient.get<T>(this.baseUrl + api);
  }

  post<T>(api: string, object: any) {
    return this.httpsClient.post<T>(this.baseUrl + api, object);
  }
}
