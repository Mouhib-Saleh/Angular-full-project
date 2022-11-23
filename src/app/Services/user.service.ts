import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
    apiUrl : string = "http://localhost:3000/User";
    getData(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
    }

    addUser(user: User): Observable<User> {
      return this.http.post<User>(this.apiUrl,user,this.httpOptions);}

  constructor(private http: HttpClient) { }
}
