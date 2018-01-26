import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html'
})
export class UserInfoComponent implements OnInit {
  @Input() user: User;
  @Output() cleanUser: EventEmitter<any> = new EventEmitter<any>();

  public userAddress: string;
  public userCompany: string;

  constructor() { }

  ngOnInit() {
    if (this.user) {
      this.userAddress = this.user.address["street"] + " " + this.user.address["suite"] + " " + this.user.address["city"] + " " + this.user.address["zipcode"]
      this.userCompany = this.user.company["name"] + " " + this.user.company["catchPhrase"];
    }
  }

  public closeCard(){
    this.cleanUser.emit();
  }

}
