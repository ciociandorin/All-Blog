import {Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {TimelineMax} from 'gsap';
@Component({
  template: ''
})
export class CoreAnimationDirective {
  @Input() duration = 1;
  @Input() delay = 0;

  @Output() complete: EventEmitter<null> = new EventEmitter();
  @Output() reverseComplete: EventEmitter<null> = new EventEmitter();
  protected timeline: TimelineMax;

  constructor(protected element: ElementRef) {
    this.timeline = new TimelineMax({
        onComplete: (_: any) => this.complete.emit(),
        onReverseComplete: (_: any) => this.reverseComplete.emit(),
        paused:true,
        reversed:true
      });
  }
  protected animateIn() {
    if(this.timeline.isActive()) {
      this.timeline.kill();
    }
    this.timeline.play();
  }
}