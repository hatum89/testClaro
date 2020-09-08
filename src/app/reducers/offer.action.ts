import {createAction, props} from '@ngrx/store';
import {OfferInterface} from '../offerInterface/Offer.Interface';

export const offert = createAction('[offert]', props<OfferInterface>());
