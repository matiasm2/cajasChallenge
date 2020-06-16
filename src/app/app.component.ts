import { Component } from '@angular/core';

import { BoxComponent } from './box/box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cajasChallenge';
  selectedBox: BoxComponent;

  changeBox(box: BoxComponent){
    if (this.selectedBox && this.selectedBox.ball) this.selectedBox.toggleBall();
    this.selectedBox = box;
  }


}
