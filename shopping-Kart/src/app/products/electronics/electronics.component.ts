import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductServiceService  } from '../../product-service.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  electronics:any;
  timeFormat: string = "This is time format";

  @Output() sendProduct = new EventEmitter();

  @Input() childToggleTime: string;

  constructor(private http: HttpClient, private ProdService: ProductServiceService) { }

  ngOnChanges(){

    if(this.childToggleTime == 'longDate'){
      this.timeFormat = `Long date is selected`;
    }
    else{
      this.timeFormat = `Short date is selected`;
    }
  }

  ngOnInit() {

    this.ProdService.getAllProducts().subscribe((data:[any]) => {
      this.electronics = data.filter(function(eachData){
        return eachData.category == "Electronics";
      })
    })

    this.ProdService.getAboutProject().subscribe((data)=>{
      console.log(data);
    })
  }

  fnAddToCart(data){
    this.sendProduct.emit(data);
  }

}
