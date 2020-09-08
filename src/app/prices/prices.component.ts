import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  prices$ = new Subscription();
  precioBase: any;
  impuestoIva: any;
  text = 'Caracteristica';

  constructor( private store: Store<any>) {
    this.prices$ = store
      .pipe(select('offert'))
      .subscribe((data => {
        if (null !== data.extraData) {
          this.precioBase = data.extraData.versions[0].productOfferingPrices[0].versions[0].price.amount;
          this.impuestoIva = data.extraData.versions[0].productOfferingPrices[0].versions[0].percentage;
          console.log(this.precioBase);
          console.log(data.extraData.versions[0].productOfferingPrices[0].versions);
        }
      }
      ));
  }

  ngOnInit(): void {
  }

}
