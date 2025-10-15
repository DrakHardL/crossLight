import { Component } from '@angular/core';

@Component({
  selector: 'app-room-5-case',
  imports: [],
  templateUrl: './room-5-case.html',
  styleUrl: './room-5-case.css'
})
export class Room5Case {

  tryOpenLocker(code: string, right_code: string = '1312') {
    console.log(code, "locker try :!");
    if (code == right_code) {
      console.log("locker open !!!");
    }
  }
}
