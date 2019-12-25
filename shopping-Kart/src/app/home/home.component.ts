import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductServiceService } from '../product-service.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  category:string = '';
  cartDisplay: boolean = false;
  selectedProduct = [];

  constructor(private router: Router, private http: HttpClient, private prodService: ProductServiceService) { }

  ngOnInit() {
    this.prodService.getAllProducts();
  }

  showProduct(param){
    this.category = param;
  }

  fnLogin(arg1, arg2){
    console.log(arg1);
    console.log(arg2);
    this.router.navigateByUrl('/login');
  }
  
  showCart(){
    this.cartDisplay = !this.cartDisplay;
  }

  fnsendProduct (data){

    this.prodService.addDataToCart(data);
    // this.prodService.updateProdQty(data, false);
  }
}
