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
  
    constructor() { 
        this.ball=false;
    }

    putBall(){
        this.changed.emit(this);
        this.toggleBall();
    }
    toggleBall(){
        this.ball=!this.ball;
    }
    
    isThereABall(){
        return this.ball;
    }
}