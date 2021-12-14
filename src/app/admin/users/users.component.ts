import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public items: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // เรียกใช้งาน api เพื่อ get ข้อมูล
    this.userService.getUser()
    .subscribe(result => {
      this.items = result;
      console.log(this.items); 

    });
  }

}
