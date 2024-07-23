// import { legacy_createStore } from 'redux';
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {ushibRanaOgr: false, ushibRanaNoogr: false};

const dopPovrezhden = createSlice({
    name: 'dopPovrezhden',
    initialState,
    reducers: {
        ushibRanaOgr(state) {state.ushibRanaOgr = !state.ushibRanaOgr;},
        ushibRanaNoogr(state) {state.ushibRanaNoogr = !state.ushibRanaNoogr;},
    }
});

const expNeopState = createSlice({
    name: 'expNeopState',
    initialState: {exp: '', neop: '', sex: ''},
    reducers: {
        exp(state, action) {state.exp = action.payload;},
        neop(state, action) {state.neop = action.payload;},
        sex(state, action) {state.sex = action.payload}
    }
});

const store = configureStore({
    reducer: {
        dopPovrezhden: dopPovrezhden.reducer,
        expNeopState: expNeopState.reducer,
    }
});
export const dopPovrezhdenia = dopPovrezhden.actions;
export const expNeopStatee = expNeopState.actions;

// const statusReducer = (state = initialState, action) => {
//     if(action.type === 'ushibRanaOgr'){
//         return { ushibRanaOgr: !state.ushibRanaOgr, ushibRanaNoogr: state.ushibRanaNoogr}
//     }
//     if(action.type === 'ushibRanaNoogr'){
//         return { ushibRanaOgr: state.ushibRanaOgr, ushibRanaNoogr: !state.ushibRanaNoogr}
//     }
//     return state
// }
// const store = legacy_createStore(statusReducer);

export default store