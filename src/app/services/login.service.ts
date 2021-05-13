import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  generateToken(loginData:any)
  {
    return this.http.post(`${baseUrl}/token`,loginData);
  }

  getCurrentUser()
  {
    return this.http.get(`${baseUrl}/current-user`);
  }

 loginUser(token:any)
 {
   localStorage.setItem("token",token);
   return true;
 }

 isLoggedIn()
 {
  let token= localStorage.getItem("token");

  if(token==undefined || token=="" || token==null)
  {
      return false;
  }else{
      return true;
  }

 }

 loggedOut()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  getToken()
  {
    return localStorage.getItem("token");
  }

  public setUser(user)
  {
    localStorage.setItem(user,JSON.stringify(user));
  }

  public getUser()
  {
   let userstr= localStorage.getItem("user");
   if(userstr==null)
   {
     this.loggedOut();
     return null;
   }
   else{
     return JSON.parse(userstr);
   }
  }

  public getUserRole()
  {
    let user=this.getUser();
    return user.authorities[0].authority;
  }
}
