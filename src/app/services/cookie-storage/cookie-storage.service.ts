import { Injectable } from '@angular/core';
import { environment } from '@env/environment.development';
import { LocalStorageService } from 'ngx-localstorage';

@Injectable({
  providedIn: 'root'
})
export class CookieStorageService {

  constructor(private cookie: LocalStorageService) { }
  private prefix = environment.auth_prefix;


  public setCookies(key:any,value:any) {
    key = `${this.prefix}-${key}`;
    this.cookie.set(key, value);
  }

  public getCookies(key:any) {
    key = `${this.prefix}-${key}`;
    let data = this.cookie.get(key);
    return data
  }

  public remove(key:any) {
    key = `${this.prefix}-${key}`;
    this.cookie.remove(key);
  }
}
