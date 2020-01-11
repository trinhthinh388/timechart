import { SET_IS_VALID_TIMETABLE } from "../actions/action-type";

export function setIsValidTimetable(state = true, action){
    switch(action.type){
        case SET_IS_VALID_TIMETABLE: {
            return state = action.payLoad;
        }
        default: 
            return state;
    }
}

export default setIsValidTimetable;