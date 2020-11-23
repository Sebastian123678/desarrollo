import { Component } from '@angular/core';
import { FipeService } from '../services/fipe.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  motos:any;
  constructor(private fipeservices:FipeService) {}

  ngOnInit(){
    this.fipeservices.getFipe('motos/marcas').subscribe(data => {
      this.motos = data;
      console.log(data);
    })
  }

}
