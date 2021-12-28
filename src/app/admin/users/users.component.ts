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
    this.userService.getUser(this.model)
    .subscribe(result => {
      console.log(result); 
      this.ngOnInit();

    });
  }
  deletUser(id: string) : void{
    this.userid = id;
  }
  confirmDelete(): void{
    $('#deleteExployeeModal').modal('hide');
    console.log(this.userid);

    this.userService.deleteUser(this.userid)
    .subscribe(result => {
      console.log(result); 
      this.ngOnInit();

    });
  }
  editUser(item): void{
    this.model = item;
  }
  updateUser(): void{
    $('#editEmployeeModel').model('hide');
    // console.log(this.model);
    this.userService.putUser(this.model)
    .subscribe(result => {
      console.log(result); 
      this.ngOnInit();

    });
    
  }
}
