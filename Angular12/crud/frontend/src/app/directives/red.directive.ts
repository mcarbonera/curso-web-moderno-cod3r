import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b'
  }
}

/*
  Diretiva de Atributo: 
    -> Capaz de alterar comportamento e estilo de componentes

  Diretiva Estrutural: 
    -> Permite adicionar elementos (criar/destruir)
*/