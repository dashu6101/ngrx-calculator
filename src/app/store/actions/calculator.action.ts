import { Action } from '@ngrx/store';

//create basic calculator actions
export const GET_TOTAL = "[Calc] Get total entered";


export class GetTotal implements Action {
    readonly type = GET_TOTAL;
    constructor(readonly payload: { firstNumber: number,secondNumber:number }) {}
}

export type calculatorTypes = GetTotal ;
