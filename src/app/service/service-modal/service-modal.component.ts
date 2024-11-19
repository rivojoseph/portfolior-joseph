import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-service-modal',
  templateUrl: './service-modal.component.html',
  styleUrls: ['./service-modal.component.css']
})
export class ServiceModalComponent implements OnInit {

  @Input()
  textParent={"text":"","image":""};

  constructor() { }

  ngOnInit(): void {

  }

}
