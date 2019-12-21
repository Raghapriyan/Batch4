import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
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

    let selectedProd = _.cloneDeep(data);
    
    this.http.get('http://localhost:3001/cart/' + data.id).subscribe((existingProd: any)=>{
        existingProd.Qty = existingProd.Qty + 1;
        this.http.put('http://localhost:3001/cart/'+ existingProd.id, existingProd).subscribe((result) => {
          this.fnUpdateProdDatabase(data);
        })
    },
    (error) => {
      console.log(error);
        if(error.status == 404){
          selectedProd.Qty = 1;
          this.http.post('http://localhost:3001/cart', selectedProd).subscribe((result)=>{
            this.fnUpdateProdDatabase(data);
          })   
        }
      }
    )

    // this.selectedProduct.push(data);
  }

  fnUpdateProdDatabase(prod){    
    prod.Qty = prod.Qty - 1;
    this.http.put('http://localhost:3000/products/'+ prod.id, prod).subscribe();
  }
}
