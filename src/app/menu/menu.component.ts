import {Component, HostListener, OnInit} from '@angular/core';
import {FrontService} from "../_service/front.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  active:boolean = false;
  headen:boolean =false;
  public currentMenu:number=0;


  public menus=[
    {"text":"Home","url":"#home","id":"home"},
    {"text":"About","url":"#about","id":"about"},
    {"text":"Service","url":"#services","id":"services"},
    {"text":"Portfolio","url":"#portfolio","id":"portfolio"},
    {"text":"Contact","url":"#contact","id":"contact"}
  ];

  sections=['home','about','services','portfolio','contact'];
  activaSelection: string | undefined;
  private navbar: any;
  private body!: Element | null;
  private menuIcon!: any;

  @HostListener('window:scroll', ['$event'])
  onScroll(event:Event):void{
    this.detectActiveSection();
  }

  constructor(private frontService:FrontService) { }

  ngOnInit(): void {
    this.navbar = document.querySelector('.navbar');
    this.body = document.querySelector('#body');
    this.menuIcon = document.querySelector('#menu-icon');
  }

  handleActive(i: number) {
      this.currentMenu=i;
  }

  private detectActiveSection() {
    const srollPosition = window.scrollY;

    for (const section of this.sections){
      const element = document.getElementById(section);

      if (element){
        const offsetTop = element.offsetTop-150;
        const offsetHeight = element.offsetHeight;

        if (srollPosition>= offsetTop && srollPosition<offsetTop + offsetHeight){
          this.activaSelection = section;
          break;
        }
      }
    }
  }




  leigthMode() {
    this.active=!this.active;
     if (this.active){
       this.body!.classList.toggle('dark-mode');
     }else {
       this.body!.classList.remove('dark-mode');
     }

  }

  stackMenu() {
    this.headen=!this.headen;
    if(this.headen){
      this.navbar!.classList.toggle('active');
    }else {
      this.navbar!.classList.remove('active');
    }
  }

  removeActive() {

  }
}
