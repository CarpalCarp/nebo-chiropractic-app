import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFadeInOnScroll]',
  standalone: true
})
export class FadeInOnScrollDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'visible');
            observer.unobserve(this.el.nativeElement); // one-time animation
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' } // triggers ~100px before fully in view
    );

    observer.observe(this.el.nativeElement);
  }
}
