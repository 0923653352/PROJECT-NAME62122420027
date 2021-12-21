import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
declare const $ : any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username ='' ;
  password ='';
  constructor(private loginService: LoginService, private router : Router) { }

  ngOnInit(): void {
  }
  login(): void{
    $('#loginModal').modal('hide');
    // console.log('username=' + this.username + 'password=' + this.password);
    //เรียกใช้งาน LoginService
    // this.loginService.getLogin(this.username,this.password)
    this.loginService.postLogin(this.username,this.password)
    .subscribe(result =>{
     alert(result);
      if (result.status === 'ผู้ดูเเลระบบ'){
        this.router.navigate (['/admin']);
      }else if(result.status === 'ผู้ใช้ระบบ'){
        this.router.navigate (['/user']);
      }else{
        alert(result.status);
      }
    })
  }

}
