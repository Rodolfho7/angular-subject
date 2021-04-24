import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() buttonName: string;
  @Output() eventEmitter = new EventEmitter<string>();

  constructor() {}

  updateValue(value: string): void {
    this.eventEmitter.emit(value);
  }
}
