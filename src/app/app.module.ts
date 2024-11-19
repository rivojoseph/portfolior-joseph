import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HlayoutComponent } from './hlayout/hlayout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import {NgsRevealModule} from "ngx-scrollreveal";
import { DirectiveDirective } from './_directive/directive.directive';
import { NoOpenDirective } from './_directive/no-open.directive';
import { ConfirmeDirective } from './_directive/confirme.directive';
import { PipeTransformPipe } from './_pipe/pipe-transform.pipe';
import { CarouselComponent } from './carousel/carousel.component';
import { DetailsComponent } from './portfolio/details/details.component';
import { ServiceModalComponent } from './service/service-modal/service-modal.component';
import { AboutModalComponent } from './about/about-modal/about-modal.component';
import {SwiperModule} from "swiper/angular";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HlayoutComponent,
    NotFoundComponent,
    AboutComponent,
    ServiceComponent,
    PortfolioComponent,
    ContactComponent,
    TestimonialComponent,
    FooterComponent,
    DirectiveDirective,
    NoOpenDirective,
    ConfirmeDirective,
    PipeTransformPipe,
    CarouselComponent,
    DetailsComponent,
    ServiceModalComponent,
    AboutModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgsRevealModule,
    SwiperModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent],

})
export class AppModule {

}
