import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private urlHttp: string = environment.production ? environment.urlBackProd : environment.urlBackDev;

  constructor(
    private http: HttpClient
  ) { }

  getHeader(): HttpHeaders{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return headers;
  }

  httpGet(url: string): any {
    return this.http.get(this.urlHttp + url, {headers: this.getHeader()});
  }

  httpPost(url: string, data: any): any {
    return this.http.post(this.urlHttp + url, data, {headers: this.getHeader()});
  }

  httpPatch(url: string, data: any): any {
    return this.http.patch(this.urlHttp + url, data, {headers: this.getHeader()});
  }

  httpDelete(url: string): any {
    return this.http.delete(this.urlHttp + url, {headers: this.getHeader()});
  }
}
