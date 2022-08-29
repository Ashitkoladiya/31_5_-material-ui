
import * as ActionType from '../action/ActionTypes'
initialvalue = {
    isLoading : false,
    medicine : [],
    error : ''
}


export const reducer_medicine = (state=initialvalue , action) =>{

     switch(action.type){
        case ActionType.MEDICINE_Data :
            return {
                ...state,
                isLoading : false,
                medicine : '',
                error : ''
            }
            default :
            return state
     }
}