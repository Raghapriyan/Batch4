import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {
furniture;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/products').subscribe((data:[any]) => {
      this.furniture = data.filter(function(eachData){
        return eachData.category == "Furniture";
      })
    })
  }

}
