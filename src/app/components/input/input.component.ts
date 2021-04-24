import { Component, EventEmitter, Input, Output } from '@angular/core';
import { mainState } from 'src/app/entities/main-state';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() buttonName: string;

  state: mainState;

  constructor(private readonly stateService: StateService) {
    this.stateService.readData().subscribe(data => this.state = data);
  }

  updateValue(value: string): void {
    const newState: mainState = {
      ...this.state,
      [this.buttonName]: value === 'age' ? +value : value
    };
    this.stateService.updateData(newState);
  }
}
