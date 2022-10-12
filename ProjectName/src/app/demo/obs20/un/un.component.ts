import { Component, OnInit } from '@angular/core';
import { FakeLoginOBSService } from 'src/app/demo/obs20/fakeLoginOBS.service';

@Component({
  selector: 'app-un',
  templateUrl: './un.component.html',
  styleUrls: ['./un.component.css']
})
export class UnComponent implements OnInit {

  isConnected : boolean = false
  // Pas de isConnected! pour forcer !!!

  constructor(private fakeLoginObsServe: FakeLoginOBSService) { }

  ngOnInit(): void {
    this.isConnected = this.fakeLoginObsServe.isConnected
  }

  login(){
    this.fakeLoginObsServe.login()
  }

  logout(){
    this.fakeLoginObsServe.logout()
  }

}
