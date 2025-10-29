import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UsersService } from '../../services/users/users';
import { toSignal } from '@angular/core/rxjs-interop';



@Component({
    standalone: true,
    selector: 'app-users-list',
    imports: [CommonModule, FormsModule],
    templateUrl: './users-list.html',
    styleUrls: ['./users-list.css'],
})
export class UsersListComponent implements OnInit {
    users: User[] = [];
    isLoading = true;
    errorMessage = '';

    constructor(private usersService: UsersService) { }

    ngOnInit(): void {
        this.usersService.getUsers().subscribe({
            next: (response) => {
                this.users = response.results;
                this.isLoading = false;
            },
            error: (err) => {
                console.error('Error fetching users', err);
                this.errorMessage = 'Something went wrong.';
                this.isLoading = false;
            }
        });
    }
}

