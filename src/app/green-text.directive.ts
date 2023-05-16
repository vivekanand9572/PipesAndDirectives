import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGreenText]'
})
export class GreenTextDirective {

  constructor(private elementRef:ElementRef ,private renderer:Renderer2) { }
  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement,'color','green');
  }
}
