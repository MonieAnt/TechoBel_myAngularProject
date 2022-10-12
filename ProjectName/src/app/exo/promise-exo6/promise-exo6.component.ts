import { Component, OnInit } from '@angular/core';
import { Exos6Service } from 'src/app/Shared/services/exos6.service';

@Component({
  selector: 'app-exos6-promise',
  templateUrl: './promise-exo6.component.html'
})
export class Exos6PromiseComponent implements OnInit {

  text : string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem perspiciatis illo laborum doloremque architecto assumenda cum, commodi id, veritatis eius cumque molestias eum saepe odit. Beatae labore blanditiis qui nesciunt."
  message : string = ""

  constructor(private exos6Serve : Exos6Service) { }

  ngOnInit(): void {

    this.exos6Serve.transformText(this.text)
    .then((res) => {
      this.message = res.message
      this.text = res.transformText
    })
    .catch((error) => {
      //
    })
    
  }

}