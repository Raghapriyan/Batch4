import { Component, OnInit } from '@angular/core';
import { Feedback } from '../models/feedbackModel';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackDetails;
  feedbackList:any;
  constructor(private service: ProductServiceService) { 
    this.feedbackDetails = new  Feedback();
  }

  ngOnInit() {
    this.feedbackDetails.name = "";
    this.feedbackDetails.id = "";
    this.feedbackDetails.comments = "";
    this.getLatestFeedBack();
  }

  submitForm(){
    console.log('user Details: ', this.feedbackDetails);
    this.service.submitFeedBack(this.feedbackDetails).subscribe((response) =>{
      alert('Feed back is submitted!');
      this.getLatestFeedBack();
    })
  }

  displayData(data){
    this.feedbackDetails.name = data.name;
    this.feedbackDetails.id = data.id;
    this.feedbackDetails.comments = data.comments;
  }

  getLatestFeedBack(){
    this.service.getFeedback().subscribe((feedback) => {
      this.feedbackList = feedback;
    })
  }

}
