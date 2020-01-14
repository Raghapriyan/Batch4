import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-angular';
  parentMsg = "Msg from Parent";
  msgFromChild = "";

  fnHandleChildMsg(msg){
    this.msgFromChild = msg;
  }

  // add(a, b){
  //   return a + b;
  // }
}
