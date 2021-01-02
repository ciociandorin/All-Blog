import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = {
    username: '',
    email: '',
    password: ''
    // sublist: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  // add " this.noAuthHeader " for methods who don't need auth

  constructor( private http: HttpClient ) { }

  // POST/REGISTER user
  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user, this.noAuthHeader);
  }

  // LOGIN
  login(authCredentials: any) {
    return this.http.post<{token:string}>(environment.apiBaseUrl + '/authenticate', authCredentials, this.noAuthHeader);
  }

  // GET user data
  getUserProfile() {
    return this.http.get<{user:string}>(environment.apiBaseUrl + '/userProfile');
  }


  //Helper Methods

  // SET, GET, DELET token

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  // get midel sring fron JWT
  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  // check si JWT is available
  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
