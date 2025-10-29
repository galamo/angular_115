import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UsersListComponent } from '../components/users-list/users-list';
import { CarsListComponent } from '../components/cars-list/cars-list';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, UsersListComponent, CarsListComponent, RouterOutlet, RouterLink],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    public user = signal('tomerDan');
    public title: string = "Angular Client Application"
    public themeBackground: string

    constructor() {
        this.themeBackground = "white"
    }


    toggleBackground(param: string) {
        this.themeBackground = param
    }
}





