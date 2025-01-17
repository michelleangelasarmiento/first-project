import { Component,computed,Input,signal } from '@angular/core';

import {DUMMY_USERS} from '../dummy-users'

const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]); /*initializing signal*/

  // imgPath= computed(()=>'assets/users/'+ this.selectedUser().avatar)



  @Input() photo!: string;
  @Input() name!: string;

  get imgPath(){
    return 'assets/users/'+ this.photo;
  }

  onSelectUser(){
    // const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);/*updating signal value, you then call it as a function*/

  }

}
