import { Component ,computed} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { DetailsComponent } from './details/details.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, UserComponent, DetailsComponent]
})
export class AppComponent {
    users = DUMMY_USERS;
    selectedUserId ='u1'

    get selectedUser() {
        return this.users.find(user => user.id === this.selectedUserId)!;
    }

    // selectedUserTasks = computed(() => {
    //     return this.users.filter((task) => {
    //         task.id === this.selectedUserId;
    //     })
    // })

    onSelectUser(id: string) {
        this.selectedUserId = id;
        console.log(this.selectedUserId)
        
    }
}
