import {createReducer, on} from '@ngrx/store';
import {offert} from './offer.action';
import {OfferInterface} from '../offerInterface/Offer.Interface';
import {OfferModel} from '../offerModel/offer.model';


export const initialState: OfferInterface = new OfferModel();

// tslint:disable-next-line:variable-name
const _offertReducer = createReducer(
  initialState,
  // tslint:disable-next-line:no-shadowed-variable
  on(offert, (state, offert: OfferInterface) => {
    return {...state , ...offert};
  })
);
export function offertReducer(state, action) {
  return _offertReducer(state, action);
}
