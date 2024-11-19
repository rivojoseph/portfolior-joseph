import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appNoOpen]'
})
export class NoOpenDirective {

  constructor(private element:ElementRef<HTMLElement>) { }


  @HostListener('click')
  onOpen(event:Event){
    return false;
  }

}
