import { Component } from '@angular/core';
import { UsersSrervice } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersSrervice]
})
export class AppComponent {

  users = [];

  constructor(private usersService: UsersSrervice) {
    
  }

  ngOnInit() {
    //this.users = this.usersService.users;
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  
}
