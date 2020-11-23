import { Component } from '@angular/core';
import { FipeService } from '../services/fipe.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  carros:any;

  constructor(private fipeservice:FipeService) {}

  ngOnInit(){
    this.fipeservice.getFipe('carros/marcas').subscribe(data => {
      this.carros = data;
      console.log(data);
    })
  }

}
