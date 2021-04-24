import { Component, OnInit } from '@angular/core';
import { mainState } from './entities/main-state';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  state: mainState;

  constructor(private readonly stateService: StateService) {}

  ngOnInit() {
    this.stateService.readData().subscribe((data) => {
      this.state = data;
    })
  }

  updateValue(value: string, field: string): void {
    const newState: mainState = {
      ...this.state,
      [field]: field === 'age' ? +value : value
    };
    this.stateService.updateData(newState);
  }
}
