import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: 'p[highlight]'
})
export class DirectiveDirective {

  @HostBinding('style.backgroundColor')
  color = 'transparent';

  @Input('backGroundColor')
  backGroundColor = 'yellow';
  @Input('base-color')
  baseColor = "transparent";

  constructor(private element:ElementRef<HTMLElement>) {

  }

  ngOnInit(){
    this.color = this.baseColor;
  }

  @HostListener('mouseenter')
  onMouseOver(){
    this.color= this.backGroundColor;
  }

  @HostListener('mouseout')
  onMouseOut(){
    this.color = this.baseColor;
  }
}
