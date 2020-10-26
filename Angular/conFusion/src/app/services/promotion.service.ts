import { Injectable } from '@angular/core';
import {Promotion} from '../shared/promotion';
import {PROMOTIONS} from '../shared/promotions';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions():Promotion[]{
    return PROMOTIONS;
  }


  getPromotion(id:string):Promotion{
    //the filtering of an array will help me to select out only those elements from the array that 
    //match a particular criteria that will be specified inside the filter here and then among them 
    //It will return only the first one
    return PROMOTIONS.filter((promo)=>(promo.id === id))[0];

  }

  getFeaturedPromotion():Promotion{
    return PROMOTIONS.filter((promo)=>(promo.featured))[0];


  }
}
