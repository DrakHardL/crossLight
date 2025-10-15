import { Component } from '@angular/core';
import { ActiveButton } from "./submit-button/submit-button";
  
@Component({
  selector: 'app-step-one',
  imports: [ActiveButton],
  templateUrl: './step-one.html',
  styleUrl: './step-one.css'
})
export class StepOne {

}
