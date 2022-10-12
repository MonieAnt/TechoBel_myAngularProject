import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeLoginService {

  isConnect : boolean = false
  
  constructor() { }


  login(){
    this.isConnect = true
    sessionStorage.setItem("isConnect", JSON.stringify(this.isConnect))
  }

  register(){
    this.login()
  }

  logout(){
    this.isConnect = false
    sessionStorage.setItem("isConnect", JSON.stringify(this.isConnect))
    //sessionStorage.removeItem("isConnect")
    //sessionStorage.clear()
  }


  refresh(){
    let tmpLogged = sessionStorage.getItem("isConnect")

    if(tmpLogged) //attention que la session est gérée par le navigateur et donc elle se détruira a un moment donné
    //exemple, la session est détruite quand on quitte le navigateur
      this.isConnect = JSON.parse(tmpLogged)
  }
}