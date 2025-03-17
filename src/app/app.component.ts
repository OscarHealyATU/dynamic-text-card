import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextCardComponent } from "./text-card/text-card.component"; 
import { TextControlsComponent } from "./text-controls/text-controls.component";
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [TextControlsComponent, TextCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dynamic-text-card';
}

