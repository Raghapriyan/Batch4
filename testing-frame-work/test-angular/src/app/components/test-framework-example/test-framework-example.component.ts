import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-framework-example',
  templateUrl: './test-framework-example.component.html',
  styleUrls: ['./test-framework-example.component.css']
})
export class TestFrameworkExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addNumbers(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
      return 'Please enter numbers to add.';
    }
    else{
      return parseInt(num1) + parseInt(num2);
    }
  }
}
