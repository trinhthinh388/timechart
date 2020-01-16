import { SET_TIMETABLE } from "../actions/action-type";

function timetableReducer(state = false, action){
    switch(action.type){
        case SET_TIMETABLE:
            return !state;
        default: 
            return state;
    }
}

export default timetableReducer;