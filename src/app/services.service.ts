import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private httpClient: HttpClient) { }

  getJson(){
    return this.httpClient.get('./assets/ofertas.json');
  }
}
