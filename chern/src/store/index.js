import redux, { legacy_createStore } from 'redux';


const statusReducer = (state = {ushibRanaOgr: false, ushibRanaNoogr: false}, action) => {
    if(action.type === 'ushibRanaOgr'){
        return { ushibRanaOgr: !state.ushibRanaOgr, ushibRanaNoogr: state.ushibRanaNoogr}
    }
    if(action.type === 'ushibRanaNoogr'){
        return { ushibRanaOgr: state.ushibRanaOgr, ushibRanaNoogr: !state.ushibRanaNoogr}
    }
    return state

}

const store = legacy_createStore(statusReducer);


export default store