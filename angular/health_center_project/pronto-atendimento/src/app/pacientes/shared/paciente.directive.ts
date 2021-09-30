import { Directive,ElementRef,Input, OnInit } from '@angular/core';

@Directive({
  selector: '[pacienteAtendido]'
})
export class PacienteAtendidoDirective implements OnInit {

  @Input() pacienteAtendido: boolean;

  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    if (this.pacienteAtendido) {
      this.el.nativeElement.style.color = "green";
    }
  }

}
