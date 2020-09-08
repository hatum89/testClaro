import { OfferInterface} from '../offerInterface/Offer.Interface';

export  class OfferModel implements OfferInterface {
  extraData: string;
  id: string;
  name: string;

  constructor() {
    this.extraData = null;
    this.id = null;
    this.name = null;
  }
}
