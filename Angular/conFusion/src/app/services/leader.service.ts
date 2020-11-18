import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]>{
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() =>resolve(LEADERS),2000);
    });
  }

  getLeader(id:string): Promise<Leader>{
    //the filtering of an array will help me to select out only those elements from the array that 
    //match a particular criteria that will be specified inside the filter here and then among them 
    //It will return only the first one
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() =>resolve(LEADERS.filter((leader)=>(leader.id === id))[0]),2000);
    });

  }

  getFeaturedLeader(): Promise<Leader>{
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() =>resolve(LEADERS.filter((leader)=>(leader.featured))[0]),2000);
    });


  }
}
