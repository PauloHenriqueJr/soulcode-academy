import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[livroConcluida]'
})
export class LivroConcluidaDirective implements OnInit{

  @Input() livroConcluida: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.livroConcluida) {
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
