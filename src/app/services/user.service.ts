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
  //สร้างเมธอดสำหรับลบข้อมูล
  public deleteUser(model:string): Observable<any>{
    return this.httpClient.delete(this.url + '?userid=' + userid);
  }
  //สร้างเมธอดดเพื่อเเก้ไขข้อมูล
  public putUser(model:any): Observable<any>{
    return this.httpClient.put(this.url,model);
  }
  
}
