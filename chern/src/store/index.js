// import { legacy_createStore } from 'redux';
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {ushibRanaOgr: false, ushibRanaNoogr: false, bampPerelom: false, krovopodtek: false, ssadiny: false, krovUpr: false, rezanRana: false, ushib: false, 
    colotoRez: false, mnogo: false, ognestrelMnozh: false, ognestrelOdin: false, colotayaRana: false, ushibRanaMk: false, ozhogiMk: false, ozhogPlamenem: false, 
    ploskKostjOgr: false, ploskKostjNoogr: false, colotoRezMk: false, ognestrelPya: false};

const dopPovrezhden = createSlice({
    name: 'dopPovrezhden',
    initialState,
    reducers: {
        ushibRanaOgr(state) {state.ushibRanaOgr = !state.ushibRanaOgr;},
        ushibRanaNoogr(state) {state.ushibRanaNoogr = !state.ushibRanaNoogr;},
        bampPerelom(state) {state.bampPerelom = !state.bampPerelom;},
        krovopodtek(state) {state.krovopodtek = !state.krovopodtek;},
        ssadiny(state) {state.ssadiny = !state.ssadiny;},
        krovUpr(state) {state.krovUpr = !state.krovUpr;},
        rezanRana(state) {state.rezanRana = !state.rezanRana;},
        ushib(state) {state.ushib = !state.ushib;},
        colotoRez(state) {state.colotoRez = !state.colotoRez;},
        mnogo(state) {state.mnogo = !state.mnogo;},
        ognestrelMnozh(state) {state.ognestrelMnozh = !state.ognestrelMnozh;},
        ognestrelOdin(state) {state.ognestrelOdin = !state.ognestrelOdin;},
        colotayaRana(state) {state.colotayaRana = !state.colotayaRana;},
        ushibRanaMk(state) {state.ushibRanaMk = !state.ushibRanaMk;},
        ozhogiMk(state) {state.ozhogiMk = !state.ozhogiMk;},
        ozhogPlamenem(state) {state.ozhogPlamenem = !state.ozhogPlamenem;},
        ploskKostjOgr(state) {state.ploskKostjOgr = !state.ploskKostjOgr;},
        ploskKostjNoogr(state) {state.ploskKostjNoogr = !state.ploskKostjNoogr;},
        colotoRezMk(state) {state.colotoRezMk = !state.colotoRezMk;},
        ognestrelPya(state) {state.ognestrelPya = !state.ognestrelPya;},
    }
});

const expNeopState = createSlice({
    name: 'expNeopState',
    initialState: {exp: '', neop: '', sex: '', popup: false, money: false},
    reducers: {
        exp(state, action) {state.exp = action.payload;},
        neop(state, action) {state.neop = action.payload;},
        sex(state, action) {state.sex = action.payload},
        popup(state, action) {state.popup = action.payload},
        money(state, action) {state.money = action.payload},
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