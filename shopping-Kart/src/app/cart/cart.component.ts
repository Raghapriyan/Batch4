import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartDetails:any;
  noProd: boolean = false;

  @Input() productsInCart: any;

  constructor(private http: HttpClient, private prodService: ProductServiceService) { }

  ngOnInit() {
    this.loadCartData();
  }

  fnUpdateCart(operation, prod){

    if(operation == 'Inc'){
      prod.Qty = prod.Qty + 1;
      this.prodService.updateCartQty(prod, true);      
    }
    else{
      console.log('Minus');
      prod.Qty = prod.Qty - 1;
      this.prodService.updateCartQty(prod, false);
    }
  }

  loadCartData(){
    this.prodService.getAllCart().subscribe((data)=>{
      this.cartDetails = data;    
    })
  }

}
