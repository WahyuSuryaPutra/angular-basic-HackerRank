import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {

  celsius: any;
  fahrenheit: any;

  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  celsiuschange(event: any){
    this.fahrenheit= (event.target.value*(9/5)+32).toFixed(1);
  }
  

  fahrenheitchange(event: any){
    this.celsius= ((event.target.value - 32) * (5/9)).toFixed(1);
  }
  

}