import { Component } from '@angular/core';

import { BoxComponent } from './box/box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cajasChallenge';
  pastBox: BoxComponent;
  selectedBox: BoxComponent;

  changeBox(box: BoxComponent){
    if (this.pastBox && this.pastBox.isPastBall()) this.pastBox.togglePastBall();
    if (this.selectedBox && this.selectedBox.isThereABall()){
      this.selectedBox.toggleBall();
      this.pastBox = this.selectedBox;
      this.pastBox.togglePastBall();
    };
    this.selectedBox = box;
    
  }


}
