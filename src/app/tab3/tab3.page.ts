import { Component, OnInit } from '@angular/core';
import { FipeService } from '../services/fipe.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  camiones:any;
  iconname= 'bus-outline';
  constructor(private fipeservicess:FipeService) {}

  ngOnInit(){
    this.camiones = this.fipeservicess.getFipe('caminhoes/marcas');
  }

}
