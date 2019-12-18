import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {
clothing;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/products').subscribe((data:[any]) => {
      this.clothing = data.filter(function(eachData){
        return eachData.category == "Clothing";
      })
    })
  }

}
