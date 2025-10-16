import { Component } from '@angular/core';
import { NumberLocker } from '@generique/number-locker/number-locker';

@Component({
  selector: 'app-room-5-case',
  imports: [NumberLocker],
  templateUrl: './room-5-case.html',
  styleUrl: './room-5-case.css'
})
export class Room5Case {
  protected open: boolean = false;

  lockerOpened() {
    this.open = true;
  }
}
