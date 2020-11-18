import { Injectable } from '@angular/core';
import {Promotion} from '../shared/promotion';
import {PROMOTIONS} from '../shared/promotions';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions():Promise<Promotion[]>{
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() =>resolve(PROMOTIONS),2000);
    });
  }


  getPromotion(id:string):Promise<Promotion>{
    //the filtering of an array will help me to select out only those elements from the array that 
    //match a particular criteria that will be specified inside the filter here and then among them 
    //It will return only the first one
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() =>resolve(PROMOTIONS.filter((promo)=>(promo.id === id))[0]),2000);
    });

  }

  getFeaturedPromotion():Promise<Promotion>{
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() =>resolve(PROMOTIONS.filter((promo)=>(promo.featured))[0]),2000);
    });


  }
}
