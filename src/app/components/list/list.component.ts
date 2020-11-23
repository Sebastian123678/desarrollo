import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() obtenapi;
  @Input() icon;
  id: string;
  path: string;
  constructor(private routerDat:Router) { }

  ngOnInit() {}

  showItem(item){
    let urlElements = item.url.split("/");
    this.id = urlElements[urlElements.lenght-1];
    this.path = urlElements[urlElements.lenght];
    console.log(this.path);
    this.routerDat.navigateByUrl(`/${this.path}/${this.id}/"modelos"`);
  }
}
