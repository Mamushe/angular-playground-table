import { Injectable } from '@angular/core';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  private item: Item = {
    no:0, 
    symbol:'', 
    wight: '', 
    name: ''
  };
  
  constructor() {}

  getItem() {
    return this.item
  }

  setItem(i: Item){
    this.item = {...i};
  }
}
