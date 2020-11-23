import { Component } from '@angular/core';
import { FipeService } from '../services/fipe.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  camiones:any;
  constructor(private fipeservicess:FipeService) {}

  ngOnInit(){
    this.fipeservicess.getFipe('caminhoes/marcas').subscribe(data => {
      this.camiones = data;
      console.log(data);
    })
  }

}
