import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  electronics;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/products').subscribe((data:[any]) => {
      this.electronics = data.filter(function(eachData){
        return eachData.category == "Electronics";
      })
    })
  }

  fnAddToCart(data){
    console.log(data);
  }

}
