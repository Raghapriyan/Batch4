import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductServiceService } from '../product-service.service';
import { ElectronicsComponent } from '../products/electronics/electronics.component';
import * as _ from 'lodash';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  category:string = '';
  loggedInTime: any;
  cartDisplay: boolean = false;
  toggleTime = "longDate";
  selectedProduct = [];
  userName = "Raghapriyan, Sivaraj, M"
  childData = "";

  @ViewChild(ElectronicsComponent, {static: true}) electronicChild : ElectronicsComponent;

  constructor(private router: Router, private http: HttpClient, private prodService: ProductServiceService) { }

  ngOnInit() {
    this.loggedInTime = new Date();
    this.prodService.getAllProducts();
  }

  ngAfterViewInit(){
    this.childData = this.electronicChild.childData;
  }

  showProduct(param){
    // console.log(this.childData);
    this.category = param;
  }

  fnLogin(arg1, arg2){
    this.router.navigateByUrl('/login');
  }
  
  showCart(){
    this.cartDisplay = !this.cartDisplay;
  }

  fnsendProduct (data){
    this.prodService.addDataToCart(data);
  }

  fnToggleDate(){

    if(this.toggleTime == 'shortDate'){
      this.toggleTime = 'longDate';
    }
    else{
      this.toggleTime = 'shortDate';
    }

  }

  clickChild(){
    console.log(this.childData);
  }
}
