import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  category:string = '';
  constructor(private router: Router) { }

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

}
