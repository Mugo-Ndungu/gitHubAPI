import { Repo } from './repos';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import {  OnInit, Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

private username: string;
private access_token = '71bfdadd4d3cc59155bb22b070183094ba473bab';

constructor(private http: HttpClient) {
  console.log('service is working');
  this.username = 'mugondungu';

}
getUserDetails() {
  return this.http.get('https://api.github.com/users/' + this.username + '?access_token=' + this.access_token).pipe(map(res => res));
}
getUserRepos() {
  return this.http.get('https://api.github.com/users/' + this.username + '/repos?access_token=' + this.access_token).pipe(map(res => res));
}
currentUser(username: string) {
  this.username = username;
}

OnInit() {

}

}

