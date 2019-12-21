import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartDetails:any;

  @Input() productsInCart: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadCartData();
  }

  fnUpdateCart(operation, prod){

    if(operation == 'Inc'){
      prod.Qty = prod.Qty + 1;
      this.http.put('http://localhost:3001/cart/'+ prod.id, prod).subscribe();

      this.http.get('http://localhost:3000/products/' + prod.id).subscribe((data: any) => {
        data.Qty = data.Qty - 1;
        this.http.put('http://localhost:3000/products/'+ data.id, data).subscribe();
      });
      
      this.loadCartData();
    }
    else{

      prod.Qty = prod.Qty - 1;

      this.http.put('http://localhost:3001/cart/'+ prod.id, prod).subscribe();

      this.http.get('http://localhost:3000/products/' + prod.id).subscribe((data: any) => {
        data.Qty = data.Qty + 1;
        this.http.put('http://localhost:3000/products/'+ data.id, data).subscribe();
      });

      if(prod.Qty == 0){
        this.http.delete('http://localhost:3001/cart/'+ prod.id).subscribe();
      }

      this.loadCartData();
    }        
  }

  loadCartData(){
    this.http.get('http://localhost:3001/cart').subscribe((data)=>{
      this.cartDetails = data;    
    })
  }

}
