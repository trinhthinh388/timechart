import { SET_VALID_TIMETABLE } from "../actions/action-type";

const initialState = [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
];

function setValidTimetable(state = initialState, action){
    switch(action.type){
        case SET_VALID_TIMETABLE: {
            state = state;
        }
        default: 
            return state;
    }
}

export default setValidTimetable;