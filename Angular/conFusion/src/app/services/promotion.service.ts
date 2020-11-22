import { Injectable } from '@angular/core';
import {Promotion} from '../shared/promotion';
import {PROMOTIONS} from '../shared/promotions';
import {Observable, observable,of} from'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions():Observable<Promotion[]>{
    return of(PROMOTIONS).pipe(delay(2000));
    
  }


  getPromotion(id:string):Observable<Promotion>{
    //the filtering of an array will help me to select out only those elements from the array that 
    //match a particular criteria that will be specified inside the filter here and then among them 
    //It will return only the first one
    return of(PROMOTIONS.filter((promo)=>(promo.id === id))[0]).pipe(delay(2000));
    

  }

  getFeaturedPromotion():Observable<Promotion>{
    return of(PROMOTIONS.filter((promo)=>(promo.featured))[0]).pipe(delay(2000));
    


  }
}
