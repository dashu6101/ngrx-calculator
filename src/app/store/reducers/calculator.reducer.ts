
import * as calculatorActions from './../actions/calculator.action';

export interface CalculatorState {
    firstNumber: number | null;
    secondNumber: number | null;
    total: Number;
}

const initialState: CalculatorState = {
    firstNumber : null,
    secondNumber: null,
    total: 0
}

export function getTotal(payload: any):number{
    let total: any;
    total = (payload.firstNumber ?? 0) + (payload.secondNumber??0);
    return total;
}


export function calculatorReducer(state: CalculatorState = initialState, action: calculatorActions.calculatorTypes): CalculatorState{
    switch(action.type){
        case calculatorActions.GET_TOTAL: {
            console.log("get total clicked"); 
            let total: number = getTotal(action.payload);         
            return {
                ...state,
                firstNumber: action.payload.firstNumber,
                secondNumber: action.payload.secondNumber,
                total : total
            }
        }
        default :
            return state;
    }
}