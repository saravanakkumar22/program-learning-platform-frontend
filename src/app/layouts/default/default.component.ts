import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {

  sideBarOpen:boolean=true;
  
  constructor(){}

  sideBarToggle(){
    this.sideBarOpen=!this.sideBarOpen;
  }

}
