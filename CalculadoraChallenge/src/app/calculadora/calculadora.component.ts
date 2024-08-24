import { Component, Input } from '@angular/core';
import { InputsComponent } from '../inputs/inputs.component';
import { Values } from './interfaces';
import { ResultadoComponent } from '../resultado/resultado.component';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [InputsComponent,ResultadoComponent],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  valores: Values = { valueUno: 0, valueDos: 0 };
  results : number =0
  handleValuesChange(values: Values) {
    this.valores = values;
    console.log('Valores recibidos:', this.valores);
  }
  onCalculate(event:any){
    switch(event.target.name){
        case "suma":
          this.results= +this.valores.valueUno + +this.valores.valueDos
          console.log(this.results)
          return
        default:
          this.results=0;
    }
  }
}
