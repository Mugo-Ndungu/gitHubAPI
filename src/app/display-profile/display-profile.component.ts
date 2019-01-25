import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Users } from './../users';
import { Repo } from './../repos';
import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.css']
})
export class DisplayProfileComponent implements OnInit {
  user: Users;
  repos: Repo;
  userRepos: any;
  currentUser: string;

  constructor(private subService: ApiService) {
  }
 searchUser() {

   this.subService.updateSearch(this.currentUser);

   this.subService.getUserInfo();
   this.user = this.subService.user;
   this.subService.getRepoInfo(this.currentUser);
   this.userRepos = this.subService.newRepo;
 }

  ngOnInit() {

    this.subService.getRepoInfo(this.currentUser);
    this.repos = this.subService.repo;
    this.subService.getUserInfo();
    this.user = this.subService.user;
  }

}
