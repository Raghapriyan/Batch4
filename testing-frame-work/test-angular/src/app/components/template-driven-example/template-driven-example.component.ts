import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-template-driven-example',
  templateUrl: './template-driven-example.component.html',
  styleUrls: ['./template-driven-example.component.css']
})
export class TemplateDrivenExampleComponent implements OnInit {

  name = "Chennai";

  studentObj = new Student();

  constructor() { }

  ngOnInit() {
  }

  fnClick(){
    
    console.log(this.studentObj.student.name);
  }

}
