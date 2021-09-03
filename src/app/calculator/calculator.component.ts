import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from './../store';
import { CalculatorState } from './../store/reducers/calculator.reducer';

import * as allActions from './../store/actions/calculator.action';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  
  firstNumber:any;
  secondNumber:any;

  public calculatorState: CalculatorState | any;

  constructor(private store: Store<fromStore.CalculatorState>) { }

  ngOnInit() {
    this.store.select<any>('calculator').subscribe(data => this.calculatorState = data);
  }

  getTotal(){
    this.store.dispatch(new allActions.GetTotal({firstNumber:this.firstNumber,secondNumber:this.secondNumber}));
  }
}
