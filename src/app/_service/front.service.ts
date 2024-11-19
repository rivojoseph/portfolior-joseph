import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrontService {

  x!:boolean;
  constructor() { }

  isActive(x:boolean):boolean{
    return this.x=x;
  }
}
