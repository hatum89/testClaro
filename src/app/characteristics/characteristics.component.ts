import {Component, OnInit} from '@angular/core';
import {ServicesService} from '../services.service';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent implements OnInit {

  characteristic$ = new Subscription();
  versions: any;
  caracteristicas = [];

  constructor( private getJson: ServicesService ,
               private store: Store<any>) {
    this.characteristic$ = store.
       pipe(select('offert'))
      .subscribe((data) => {
        if (null !== data.extraData) {
          this.caracteristicas = data.extraData.versions[0].characteristics;
          console.log('caracteristicas', this.caracteristicas);
        }
      }
     );
  }

  ngOnInit(){
  }

}
