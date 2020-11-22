import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';
import {Observable, observable,of} from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]>{
    return of(LEADERS).pipe(delay(2000));
    
  }

  getLeader(id:string): Observable<Leader>{
    //the filtering of an array will help me to select out only those elements from the array that 
    //match a particular criteria that will be specified inside the filter here and then among them 
    //It will return only the first one
    return of(LEADERS.filter((leader)=>(leader.id === id))[0]).pipe(delay(2000));
    

  }

  getFeaturedLeader(): Observable<Leader>{
    return of(LEADERS.filter((leader)=>(leader.featured))[0]).pipe(delay(2000));
    


  }
}
