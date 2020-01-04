import { Component, OnInit } from '@angular/core';
import { Feedback } from '../models/feedbackModel';
import { ProductServiceService } from '../product-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedback-reactive-forms',
  templateUrl: './feedback-reactive-forms.component.html',
  styleUrls: ['./feedback-reactive-forms.component.css']
})
export class FeedbackReactiveFormsComponent implements OnInit {

  // name = new FormControl('');
  feedbackList:any;

  feedbackDetails = new FormGroup({
    name : new FormControl(''),
    id : new FormControl(''),
    comments: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      street: new FormControl('')
    })
  })
  
  constructor(private service: ProductServiceService) { 
    // this.feedbackDetails = new  Feedback();
  }

  ngOnInit() {
    this.getLatestFeedBack();
  }

  submitForm(){
    console.log(this.feedbackDetails.value);
  }

  // displayData(data){
  //   this.feedbackDetails.setValue = data;
  // }

  getLatestFeedBack(){
    this.service.getFeedback().subscribe((feedback) => {
      this.feedbackList = feedback;
    })
  }

}
