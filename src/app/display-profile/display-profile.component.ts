import { Repo } from './../repos';
import { Users } from './../users';
import { ApiService } from './../api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.css']
})
export class DisplayProfileComponent implements OnInit {
  profile: any;
  repos: any;
  username: string;
  constructor(private apiService: ApiService) {

  }
getUsers() {
  this.apiService.currentUser(this.username);
  this.apiService.getUserDetails().subscribe(profile => {
    console.log(profile);
    this.profile = profile;
  });
  this.apiService.currentUser(this.username);
  this.apiService.getUserRepos().subscribe(repos => {
    console.log(repos);
    this.repos = repos;
  });

}
ngOnInit() {}

}
