import { Component, OnDestroy, OnInit } from '@angular/core';
import { FakeLoginService } from 'src/app/Shared/services/fake-login.service';

@Component({
  selector: 'app-di12',
  templateUrl: './di12.component.html'
})
export class DI12Component implements OnInit, OnDestroy {

  isConnect : boolean = false

  constructor(private fakeLoginService : FakeLoginService) {
    console.log("Constructeur du COMPO fake login")
  }

  ngOnInit(): void {
    this.isConnect = this.fakeLoginService.isConnect
    console.log("Initialisation du COMPO fake login")
  }

  ngOnDestroy(){
    console.log("Desctruction du COMPO fake login")

  }


  login(){
    this.fakeLoginService.login()
    this.isConnect = this.fakeLoginService.isConnect
  }

  register(){
    this.fakeLoginService.register()
    this.isConnect = this.fakeLoginService.isConnect
  }

  logout(){
    this.fakeLoginService.logout()
    this.isConnect = this.fakeLoginService.isConnect
  }

}