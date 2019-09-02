import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyNumbers]'
})

export class OnlyNumbersDirective {

  constructor() { }

  // Directiva para inputs de tipo numéricos
  // Filtra las teclas +, -, e

  @HostListener('document:keypress', ['$event'])
  
  keyPress( event: KeyboardEvent ) {

    if(event.keyCode == 101 || event.keyCode == 43 || event.keyCode == 45)
      event.preventDefault();
  }  
}    