import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-number-locker',
  imports: [],
  templateUrl: './number-locker.html',
  styleUrl: './number-locker.css'
})
export class NumberLocker {
  @Input() label: string = "DEFAULT LABEL, PLEASE CHANGE IT !";
  @Input() range: {min: number, max: number } = {min: 0, max: 0}
  @Input() solution: string = "";

  @Output() open: EventEmitter<void> = new EventEmitter();

  tryOpenLocker(code: string) {
    if (code == this.solution) {
      this.open.emit();
    }
  }
}
