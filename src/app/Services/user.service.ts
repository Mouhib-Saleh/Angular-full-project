import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
    apiUrl : string = "http://localhost:3000/User";
    getData(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
    }
  constructor(private http: HttpClient) { }
}
