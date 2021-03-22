import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setStorage(token: string): void {
    localStorage.setItem("userToken",token);
  }

  getStorage(value: string): string {
    return localStorage.getItem(value);
  }

  getCurrentUser() {
    let userToken = this.getStorage("userToken");
    if (!(userToken === null || userToken === undefined)) {
      return userToken;
    } else return null;
  }

  deleteStorage() {
    localStorage.removeItem("userToken");
  }
}
