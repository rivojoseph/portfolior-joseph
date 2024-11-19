import {Component, Input, OnInit} from '@angular/core';

// install Swiper components

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  @Input('initialvam')
  counte=0;

  @Input('step')
  step=0;

  constructor() {

  }

  ngOnInit(): void {


  }

  onIncrement() {
    this.counte+=this.step;
  }

  onDecrement() {
    this.counte-=this.step;
  }
}
