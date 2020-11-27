import { Directive, OnInit, OnDestroy, ViewContainerRef, ElementRef, Input, EventEmitter } from '@angular/core';
import { TimelineMax } from 'gsap';
import { CoreAnimationDirective } from './core-animation.directive';

@Directive({
  selector: '[fadeInAnimation]'
})
export class FadeInAnimationDirective extends CoreAnimationDirective implements OnInit {
  constructor(protected element: ElementRef) {
    super(element);
  }

  ngOnInit() {
    // perform animation
    this.animateIn();
  }

  protected animateIn() {
    this.timeline.from(this.element.nativeElement, this.duration, {opacity:'0', ease:"power4.inOut"}, this.delay);
    super.animateIn();
  }
}