import { Component } from '@angular/core';

@Component({
  selector: 'app-hover',
  templateUrl: './hover.component.html',
  styleUrls: ['./hover.component.css']
})
export class HoverComponent {
  showDropdown:boolean=false;
  ShowServices:boolean=false;
  showSolutions:boolean=false;
}
