import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductServiceService  } from '../../product-service.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  electronics:any;

  @Output() sendProduct = new EventEmitter();

  constructor(private http: HttpClient, private ProdService: ProductServiceService) { }

  ngOnInit() {

    this.ProdService.getAllProducts().subscribe((data:[any]) => {
      this.electronics = data.filter(function(eachData){
        return eachData.category == "Electronics";
      })
    })
  }

  fnAddToCart(data){
    this.sendProduct.emit(data);
  }

}
