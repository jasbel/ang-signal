import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  private _el?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this._el = this.el;
  }

  ngOnInit(): void {
    this.setStyle();
  }

  setStyle(): void {
    if (!this._el) return;

    this._el.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if (!this._el) return;

    if (!this._errors) {
      this._el.nativeElement.innerText = 'No hay errores';

      return;
    }

    const errors = Object.keys(this._errors);

    if (errors.includes('required')) {
      this._el.nativeElement.innerText = 'Este Campo es requerido';

      return;
    }

    if (errors.includes('minlength')) {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];
      this._el.nativeElement.innerText = `
        Minimo ${current}/${min} caracteres.
      `;

      return;
    }

    this._el.nativeElement.innerText = ``;
  }
}
