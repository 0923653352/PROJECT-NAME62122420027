import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost/angular64API/user.php';
  constructor(private httpClient: HttpClient) { }

  //สร้างเมธอดสำหรับ CRUD Operation
  public getUser() : Observable<any>{
    return this.httpClient.get(this.url);
  }
  public postUser(model:any):Observable<any>{
    console.log(model);
    return this.httpClient.post(this.url,model);
  }
}
