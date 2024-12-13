import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    /*========== typed===========*/
    const options = {
      strings:['Frontend Developer','Backend Developer','Designer'],
      typeSpeed:100,
      backSpeed:100,
      backDelay:1000,
      loop: true
    };
    const typed = new Typed('.multiple-text',options);
  }

  telechagerPdf() {
    const pdefPath = "assets/docs/RANDRIANASOLOMANANARIVO.pdf"
    window.open(pdefPath,'__brand__');
  }
}
