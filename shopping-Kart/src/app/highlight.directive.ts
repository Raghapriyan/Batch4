import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() highlightcolor: string;

  constructor(private el: ElementRef) {
   }

   @HostListener('mouseenter') onmouseenter(){
     this.hightlight(this.highlightcolor);     
   }

   @HostListener('mouseleave') onmouseleave(){
    this.hightlight('red');     
  }

   private hightlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
   }

}
