import { Directive, OnInit, OnDestroy, ViewContainerRef, ElementRef, Input, EventEmitter } from '@angular/core';
import { TimelineMax } from 'gsap';
import { CoreAnimationDirective } from './core-animation.directive';

@Directive({
  selector: '[topToBottomAnimation2]'
})
export class TopToBottomDirective2 extends CoreAnimationDirective implements OnInit {
  constructor(protected element: ElementRef) {
    super(element);
  }

  ngOnInit() {
    // perform animation
    this.animateIn();
  }

  protected animateIn() {
    this.timeline.from(this.element.nativeElement, this.duration, {top: "0%", height: "0%", ease:"power4.inOut"}, this.delay);
    super.animateIn();
  }
  
}