import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: 'a[confirme]'
})
export class ConfirmeDirective {
  @Input('confirmeMessage')
  message!:string;

  constructor() { }

  @HostListener('click')
  confirm(){
   return confirm(this.message);
  }
}
