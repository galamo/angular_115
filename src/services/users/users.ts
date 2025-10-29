import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
    name: { first: string; last: string };
    email: string;
    phone: string;
    picture: { thumbnail: string };
}

interface UsersApiResponse {
    results: User[];
}

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private apiUrl = 'https://randomuser.me/api/?results=10';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<UsersApiResponse> {
        return this.http.get<UsersApiResponse>(this.apiUrl);
    }
}
