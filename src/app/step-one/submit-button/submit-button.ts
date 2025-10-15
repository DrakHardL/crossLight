import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  imports: [],
  templateUrl: './submit-button.html',
  styleUrl: './submit-button.css'
})
export class ActiveButton {
  @Input() label: string = "DEFAULT";
  @Input() solution: string = "NULL";
  @Output() submited: EventEmitter<void> = new EventEmitter();

  onSubmit(attemp: string) {
    if (attemp === this.solution) {
      console.log(`solution ${this.label} find !`);
      this.submited.emit();
    }
  }
}
