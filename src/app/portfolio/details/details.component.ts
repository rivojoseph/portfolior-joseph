import {Component, Input, OnInit} from '@angular/core';
import SwiperCore, {EffectCoverflow, Navigation, Pagination} from "swiper";
import Swiper from "swiper";


SwiperCore.use([Navigation,Pagination,EffectCoverflow]);

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() project={categorie:"",titre:"",description:"",image:[{"image":""}],"resource":"","projet":"","date":""};
  constructor() { }

  ngOnInit(): void {
    const swiper = new Swiper('.swiper', {
      // configure Swiper to use modules
      effect:"coverflow",
      grabCursor: true,
      centeredSlides:false,
      slidesPerView:"auto",
      coverflowEffect:{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier:1,
        slideShadows:false
      },
      autoplay:true,
      loop:true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },

    });
  }

}
