import { Component, OnInit } from '@angular/core';
import { Feedback } from '../models/feedbackModel';
import { ProductServiceService } from '../product-service.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-feedback-reactive-forms',
  templateUrl: './feedback-reactive-forms.component.html',
  styleUrls: ['./feedback-reactive-forms.component.css']
})
export class FeedbackReactiveFormsComponent implements OnInit {

  // name = new FormControl('');
  feedbackList:any;

  // *** If you want to use form group without form builder please uncomment the below code   ****
  feedbackDetails = new FormGroup({
    name : new FormControl(''),
    id : new FormControl(''),
    comments: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      street: new FormControl('')
    })
  })


  // *** If you want to use form builder please uncomment the below code   ****
  // formBuilder = this.fb.group({
  //   name: [''],
  //   id: [''],
  //   comments: [''],
  //   address: this.fb.group({
  //     city: [''],
  //     street: ['']
  //   })
  // })
  
  constructor(private service: ProductServiceService, private fb: FormBuilder) { 
    // this.feedbackDetails = new  Feedback();
  }

  ngOnInit() {
    this.getLatestFeedBack();
  }

  submitForm(){

    console.log(this.feedbackDetails.valid);
    // *** If you want to use form group without form builder please uncomment the below code   ****
    // this.feedbackDetails.setValue({
    //   name: 'Ragha1',
    //   id: 'r123@getMaxListeners.com',
    //   comments: 'TEsting Comments',
    //   address: {
    //     city: 'Chennai',
    //     street: 'Anna Nagar 1st Street'
    //   }
    // })


    // *** If you are using form builder please uncomment the below code   ****
    // this.formBuilder.patchValue({
    //   address: {
    //     city: 'Trichy',
    //     street: 'K K Nagar 1st Street'
    //   }
    // })
    // console.log(this.formBuilder.status);
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
