import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable()

export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get('http://localhost:3000/products');
  }

  getProductByID(prodID){
    return this.http.get('http://localhost:3000/products/' + prodID);
  }

  getAllCart(){
    return this.http.get('http://localhost:3001/cart');
  }

  getCartDataByID(prodID){
    return this.http.get('http://localhost:3001/cart/' + prodID);
  }

  addDataToCart(data){
    this.getCartDataByID(data.id).subscribe((cartData: any) => {
      console.log('cart', cartData);
      cartData.Qty = cartData.Qty + 1;
      this.http.put('http://localhost:3001/cart/' + cartData.id, cartData).subscribe();
      this.updateProdQty(data, false);
    },
    (error) => {
      let cartData = _.cloneDeep(data);
      cartData.Qty = 1;
      console.log('Inside Error', cartData);
      this.http.post('http://localhost:3001/cart/', cartData).subscribe();
      this.updateProdQty(data, false);
    });
  }

  updateCartQty(data, incFlag){

    this.getProductByID(data.id).subscribe((prodData: any) => {
      console.log('before', prodData.Qty)
      // prodData.Qty = prodData.Qty - (incFlag != true ? 1 : -1);
      // console.log('after', prodData.Qty);
      this.updateProdQty(prodData, !incFlag);
    });

    if(data.Qty == 0){
      return this.deleteCartData(data).subscribe();
    }
    else{
      return this.http.put('http://localhost:3001/cart/' + data.id, data).subscribe();
    }

  }

  updateProdQty(data, incFlag){
    if(incFlag){
      console.log('inside Inc');
      data.Qty = data.Qty + 1;
    }
    else{
      console.log('inside Dec');
      data.Qty = data.Qty - 1;
    }
    return this.http.put('http://localhost:3000/products/' + data.id, data).subscribe();
  }

  deleteCartData(data){
    return this.http.delete('http://localhost:3001/cart/' + data.id);
  }
}
