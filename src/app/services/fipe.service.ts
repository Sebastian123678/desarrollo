import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const FIPEURL = environment.fipeUrl;

@Injectable({
  providedIn: 'root'
})
export class FipeService {

  constructor(private http:HttpClient) { }
  
  getFipe(path){
    return this.http.get(`${FIPEURL}${path}`);
  }
}
