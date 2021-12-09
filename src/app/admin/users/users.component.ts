import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public items: any;
  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    // เรียกใช้งาน api เพื่อ get
    this.httpClient.get('http://localhost/angular64API/user.php')
    .subscribe(result => {
      this.items = result;
      console.log(this.items); 

    });
  }

}
