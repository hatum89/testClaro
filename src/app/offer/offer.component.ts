import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';
import {Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as offertAction from '../reducers/offer.action';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  versions: any;
  oferta: any;

  offert$ = new Subscription();
  offertName: any;
  offertId: any;

  constructor( private getJson: ServicesService ,
               private store: Store<any>
               ) {

    this.offert$ = store
      .pipe(select('offert'))
      .subscribe(data => {
        this.oferta = data;
        console.log(this.oferta);
      });
  }

  ngOnInit() {
    this.getJson.getJson()
      .subscribe((resp: any) => {
        this.versions = resp.map( (data) => {
          return {
            id: data.id,
            name: data.versions[0].name,
            extraData: data,
          };
        });
        console.log('versions', this.versions);
      });
  }

  getOferta() {
    let offert;
    this.versions.forEach( (data) => {
      if (data.name === this.oferta) {
        offert = data;
      }
    });
    this.store.dispatch(offertAction.offert(offert));
    this.offertName = this.oferta.name;
    this.offertId = this.oferta.id;
  }

}
