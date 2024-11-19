import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HlayoutComponent} from "./hlayout/hlayout.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ServiceComponent} from "./service/service.component";
import {TestimonialComponent} from "./testimonial/testimonial.component";

const routes: Routes = [
  /*{path:"", component:HlayoutComponent,children:[
      {path:"",redirectTo:"home", pathMatch:"full"},
      {path:"home",component:HomeComponent},
      {path:"about",component:AboutComponent},
      {path:"service",component:ServiceComponent},
      {path:"portfolio",component:PortfolioComponent},
      {path:"contact",component:ContactComponent},
      {path:"testimonial",component:TestimonialComponent}
    ]},*/
  {path:"",component:HlayoutComponent},
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
