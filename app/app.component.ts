import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './shared/models/user';
import { UserService } from './shared/services/user.service';
import { UserComponent } from './users/users.component';

@Component({
  selector: 'my-app',
  template: `
    <my-users></my-users>

    <div class="jumbotron">
      <h1>Welcome to Our App!</h1>
    </div>
    <div *ngIf="users">
      <div *ngFor="let user of users">
        <h2>{{ user.first_name }}</h2>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  users: User[];

  constructor(private service: UserService) {}

  ngOnInit() {
    // grab users
    this.service.getUsers()
      .subscribe(users => this.users = users);
  }

}