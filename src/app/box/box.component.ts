import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'box',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.css']
  })

export class BoxComponent{
    @Input() number: number;
    @Output() changed = new EventEmitter<BoxComponent>();
    ball: boolean;
    pastBall: boolean;
  
    constructor() { 
        this.ball=false;
        this.pastBall=false;
    }

    putBall(){
        this.changed.emit(this);
        this.toggleBall();
    }
    toggleBall(){
        this.ball=!this.ball;
    }

    togglePastBall(){
        this.pastBall=!this.pastBall;
    }
    
    isThereABall(){
        return this.ball;
    }
    
    isPastBall(){
        return this.pastBall;
    }
}