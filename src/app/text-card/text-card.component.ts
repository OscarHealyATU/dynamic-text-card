import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-text-card',
  imports: [],
  templateUrl: './text-card.component.html',
  styleUrl: './text-card.component.css'
})
export class TextCardComponent {
  cardTitle:string = 'Card Title';
  cardContent:string = 'relevent content';
  textColor:string = '#663';
  bgColor:string = '#eee';
  
}
