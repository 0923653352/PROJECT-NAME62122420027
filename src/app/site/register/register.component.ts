import { Component, OnInit } from '@angular/core';
import { UsersComponent } from 'src/app/admin/users/users.component';
import { UserService } from 'src/app/services/user.service';

declare const $ :any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //ประกาศตัวเเปรเเบบ object เพื่อใช้  bind ข้อมูลในฟอร์มลงทะเบียน
  model = {
    name :'',
    gender:'',
    address:'',
    telephone:'',
    email:'',
    username:'',
    password:'',
    statusid:''
  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  register(): void{
  $('#registerModal').modal('hide');
    this.model.statusid = '2'; // 2 คือ ผู้ใช้งาน
    //  console.log(this.model); 
    //เรียกใช้ User service เพื่อ post ข้อมูล
    this.userService.postUser(this.model)
    .subscribe(result => {
      // console.log(result);
      alert(result.status);
    });
  }

}
