import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { reducer_medicine } from "./medicine.reducer";

export const rootreducs = combineReducers ({
    counter : counterReducer,
    medicine :reducer_medicine,
})  