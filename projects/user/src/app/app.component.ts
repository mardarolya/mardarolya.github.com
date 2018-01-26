import { Component, OnInit } from '@angular/core';
import { User, UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public currentUser: User = null;
  public users: User[] = [];
  public isError: Boolean = false;

  constructor(public userService: UserService) { 
  }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    this.isError = false;
    this.userService.getUsers((result)=>{
      this.users = result;      
    }, (error)=>{
      this.isError = true;
      console.log(error)
    })
  }

  public getUserInfo(user){
    this.currentUser = null;
    setTimeout(()=>{
      this.currentUser = user;
    }, 500);
  }
}
