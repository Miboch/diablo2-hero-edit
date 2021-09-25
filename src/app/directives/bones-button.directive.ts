import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({selector: '[boButton]'})
export class BonesButtonDirective implements AfterViewInit {
  @Input() primary = false;
  @Input() outline = false;

  constructor(private host: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.renderer.addClass(this.host.nativeElement, 'bones-btn');
    if (this.primary)
      this.renderer.addClass(this.host.nativeElement, 'primary');
    if (this.outline)
      this.renderer.addClass(this.host.nativeElement, 'outline');
  }

}
