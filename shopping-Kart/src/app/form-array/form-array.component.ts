import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  productDetails = this.fb.group({
    name: [''],
    id: [''],
    qty: [''],
    comments: this.fb.array([
      this.fb.control('')
    ])
  })

  get commentControls(){
    return this.productDetails.get('comments') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  AddCommentControl(){
    this.commentControls.push(this.fb.control(''));
  }

  submitData(){
    console.log(this.productDetails.value);
  }

}
