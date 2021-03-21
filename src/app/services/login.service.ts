import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base/base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private localUrl: string = `login`;

  constructor(
    private _httpService: BaseService,
  ) { }

  postLogin(data: object): Observable<any> {
    let url: string = `login`;
    return this._httpService.httpPost(url, data);
  }
}
