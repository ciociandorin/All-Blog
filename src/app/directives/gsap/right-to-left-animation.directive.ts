import { Directive, OnInit, OnDestroy, ViewContainerRef, ElementRef, Input, EventEmitter } from '@angular/core';
import { TimelineMax } from 'gsap';
import { gsap } from 'gsap';
import { CoreAnimationDirective } from './core-animation.directive';

@Directive({
  selector: '[rightToLeftAnimation]'
})

export class RightToLeftAnimationDirective extends CoreAnimationDirective implements OnInit {
  constructor(protected element: ElementRef) {
    super(element);
  }

  ngOnInit() {
    // perform animation
    this.animateIn();
  }

  protected animateIn() {
    gsap.from(this.element.nativeElement, {
      width: "0%",
      ease: "power4.inOut",
      duration: 0.7,
      stagger: 0.2
    });
    super.animateIn();
  }
  
}