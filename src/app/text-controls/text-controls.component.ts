import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextStyleService } from '../text-style.service';

@Component({
  selector: 'app-text-controls',
  imports: [NgFor, FormsModule],
  templateUrl: './text-controls.component.html',
  styleUrl: './text-controls.component.css'

})
export class TextControlsComponent {
  updateText(x: any) {
   console.log;
  }


  fontList: string[] = ['Comic Sans MS', 'Arial', 'Times New Roman', 'Courier New', 'Verdana'];
  // default text properties
  text = 'This is the default message';
  selectedFont = this.fontList[3];
  fontSize = 16;
  colortext = '#000000';
  // default card properties
  cardBGColor = '#ffffff0';
  cardWidth = '60%';
}
