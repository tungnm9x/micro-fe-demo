import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'micro-fe-test-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputTextComponent)
    }
  ]
})
export class InputTextComponent implements ControlValueAccessor {
  @Input() control: FormControl | AbstractControl;
  @Input() errors: ValidationErrors;

  @Input() isDisabled = false;
  @Input() isReadonly = false;
  @Input() isRequired = false;
  @Input() label = '';
  @Input() maxLength = 1000000;
  @Input() minLength = 0;
  @Input() note = '';
  @Input() panelClass = '';
  @Input() placeHolder = '';
  @Output() keyboardEvt = new EventEmitter();
  @Output() blurEvt = new EventEmitter();

  value = '';

  onChange = (value: string) => {};
  onTouched = () => {};

  constructor(
    public changeDetectorRef: ChangeDetectorRef
  )
  {}

  handlerKeyPress(evt: any)
  {
    this.onChange(evt.target.value);
    this.writeValue(evt.target.value);
    this.onTouched();
  }

  writeValue(obj: any): void
  {
    if (obj !== undefined)
    {
      this.value = obj;
      this.onChange(obj);
      this.changeDetectorRef.detectChanges();
    }
  }

  registerOnChange(fn: any): void
  {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void
  {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onEnter(): void {
    this.keyboardEvt.emit();
  }
}
