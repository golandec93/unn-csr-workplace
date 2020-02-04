import { Directive, ElementRef } from '@angular/core';
import Inputmask from 'inputmask';

@Directive({
  selector: '[mask]'
})
export class InputMaskDirective {
  constructor(private element: ElementRef) {
    this.setInputMask(element);
  }

  private setInputMask(element: ElementRef) {
    // Get the value of the mask attribute
    const mask = element.nativeElement.getAttribute('mask');

    if (mask) {
      // Set the input mask and then mask the element the directive was used on
      Inputmask({ 'mask': mask }).mask(element);
    }
  }
}
