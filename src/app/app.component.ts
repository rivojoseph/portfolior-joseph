import {Component, OnInit} from '@angular/core';
import {NgsRevealConfig} from "ngx-scrollreveal";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio17';

  constructor(config:NgsRevealConfig) {
    config.duration = 2000;
    //config.easing = 'cubic-bezier(0.645, 0045, 0355, 1)';
    config.reset = true;
    config.distance = "80px";
    config.delay =200;

  }

  ngOnInit(): void {

  }
}
