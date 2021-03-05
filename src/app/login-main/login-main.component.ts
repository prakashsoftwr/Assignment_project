import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, Event, NavigationEnd } from '@angular/router';
import { LinkService } from '../link.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare const $: any;

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnInit {
  loginForm:FormGroup;
  submitted = false;
  url: string;
  url1;
  activeRoute: string;
  active2Route;
  constructor(private router: Router, private link: LinkService,private formBuilder:FormBuilder) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url.split('/');
        this.url = url[1];
        this.url1 = url[2];
        this.activeRoute = this.url;
        this.active2Route = this.url1;
      }
    });
    if (this.url === 'login-main') {
      this.link.createAdminLink();
    }
    if (this.url === 'chat') {
      this.link.createChatLink();
    }
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
  });
  }
  get f() { return this.loginForm.controls; }

onSubmit(){
  console.log(this.loginForm.value);
    this.submitted = true;
    this.router.navigate(['admin/user']);
    if(this.loginForm.invalid){
      return;
    }
}
onReset() {
  this.submitted = false;
  this.loginForm.reset();
}
}
