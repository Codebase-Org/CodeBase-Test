import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {Iaccount} from "../../../interfaces/iaccount";
import {ApiService} from "../../../services/api.service";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  urlPath: any = "http://localhost/codebase/assets/img/";
  //urlPath: any = "http://192.168.22.31/codebase/assets/img/";

  isFullscreen: boolean = false;
  isUserInfoActive: boolean = false;

  fullname: string | undefined = "";
  email: string | undefined = "";
  onlineStatus: number | undefined = 0;

  constructor(private router: Router, private el: ElementRef, private auth: AuthService, private api: ApiService) {
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.key === 'F11') {
      this.toggleFullscreen();
    }
  }
  ngOnInit() {
    this.getUser();
  }

  getUser() {
    let data: Iaccount = {
      account_id: this.auth.id
    }

this.api.getProfileData(data).subscribe(usr => {
  this.fullname = usr.firstname + ' ' + usr.secondname + ' ' + usr.lastname;
  this.email = usr.email;
  this.onlineStatus = usr.onlineStatus;
})
  }

  toggleUserInfoMenu() {
    this.isUserInfoActive = !this.isUserInfoActive;
  }

  toggleFullscreen() {
    let element = this.el.nativeElement;

    if(!this.isFullscreen) {
      if(element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullscreen) {
        element.mozRequestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    } else {
      if (element.exitFullscreen) {
        element.exitFullscreen();
      } else if (element.mozExitFullscreen) {
        element.mozExitFullscreen();
      } else if (element.webkitExitFullscreen) {
        element.webkitExitFullscreen();
      } else if (element.msExitFullscreen) {
        element.msExitFullscreen();
      }
    }

    this.isFullscreen = !this.isFullscreen;
  }

  logoutHandler() {
    this.auth.logout();
  }

}
