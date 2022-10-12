import { Subject } from "rxjs"

export class FakeLoginOBSService {

    isConnected : boolean = false

    $isConnected : Subject<boolean> = new Subject<boolean>()

    constructor(){

    }


    login(){
        this.isConnected = true
        localStorage.setItem('isConnected', 'true')
        // this.emit_isConnect()
    }

    logout(){
        this.isConnected = false
        localStorage.removeItem('isConnected')
        // this.emit_isConnect()
    }

}