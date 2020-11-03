import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders():Leader[]{
    return LEADERS;
  }

  getLeader(id:string):Leader{
    //the filtering of an array will help me to select out only those elements from the array that 
    //match a particular criteria that will be specified inside the filter here and then among them 
    //It will return only the first one
    return LEADERS.filter((leader)=>(leader.id === id))[0];

  }

  getFeaturedLeader():Leader{
    return LEADERS.filter((leader)=>(leader.featured))[0];


  }
}
