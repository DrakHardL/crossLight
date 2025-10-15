import { Component, signal } from '@angular/core';
import { StepOne } from "./step-one/step-one";
import { Room5 } from "./room-5/room-5";


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [StepOne, Room5]
})
export class App {
  protected readonly title = signal('crossLight');
}
