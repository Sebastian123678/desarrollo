import { Component, OnInit } from '@angular/core';
import { FipeService } from '../services/fipe.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  carros:any;
  iconname = 'car-sport';
  constructor(private fipeservice : FipeService,
    public authservice : AuthService) {}

  ngOnInit(){
    this.carros = this.fipeservice.getFipe('carros/marcas');
    /*
    this.fipeservice.getFipe('carros/marcas').subscribe(data => {
      this.carros = data;
      console.log(data);
    })*/
  }

  Onlogout(){
    this.authservice.logout();
  }

}
