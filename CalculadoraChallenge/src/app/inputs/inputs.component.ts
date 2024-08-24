import { Component, EventEmitter, Output } from '@angular/core';
import { Values } from '../calculadora/interfaces';



@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent {
  values:Values = new Values();
  @Output() valuesChange = new EventEmitter<Values>();
  onChangeInput(event: any) {
    const { name, value } = event.target;
    console.log(event)
    this.values = { ...this.values, [name]: +value }; 
    this.valuesChange.emit(this.values); 
  }
  
}
