import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-example',
  templateUrl: './reactive-forms-example.component.html',
  styleUrls: ['./reactive-forms-example.component.css']
})
export class ReactiveFormsExampleComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }  

/* Below is simple Form Control Example */
// name = new FormControl('Ragha');


/* Below is simple Form Group Example */
// student = new FormGroup({
//   name: new FormControl('Ragha'),
//   age: new FormControl('30'),
//   class: new FormControl('XII'),
//   address: new FormGroup({
//     flat: new FormControl(''),
//     street: new FormControl(''),
//     city: new FormControl('')
//   })
// })

/* Below is simple Form Builder Example */

// student = this.fb.group({
//   name: ['Ragha'],
//   age: this.fb.control('30'),
//   class: ['XII'],
//   address: this.fb.group({
//     flat: [''],
//     street: [''],
//     city: ['']
//   })
// })

/* Below is example for Form Array */

student = this.fb.group({
  name: ['Ragha'],
  age: this.fb.control('30'),
  class: ['XII'],
  address: this.fb.array([
    this.fb.control('')
  ])
})

get add(){
  return this.student.get('address') as FormArray;
} 

fnAdd(){
  this.add.push(this.fb.control(''));
}

  fnSubmit(){
    console.log(this.student.value);
  }

}
