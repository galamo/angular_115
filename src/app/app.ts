import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersList } from '../components/users-list/users-list';

@Component({
  selector: 'app-root', 
  imports: [RouterOutlet, CommonModule, UsersList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    public user = signal('tomerDan');
    public title: string = "Angular Client Application"
    public themeBackground:string
    public showMesage: boolean;
    constructor(){
        this.showMesage = false;
        this.themeBackground = "red"
    }

    toggle(){
        this.showMesage = !this.showMesage
    }
    toggleBackground(param:string){
        this.themeBackground = param
    }
}





