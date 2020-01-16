import { SET_CHOSEN_SUBJECT, UNSET_CHOSEN_SUBJECT } from "../actions/action-type";

export function chosenSubjectReducer(state = [], action){
    switch(action.type){
        case SET_CHOSEN_SUBJECT:{
            return state.concat([action.payLoad]);
        }
        case UNSET_CHOSEN_SUBJECT: {
            return state = state.filter(s => !(s._id === action.payLoad._id));
        }
        default: 
            return state;
    }
}

export default chosenSubjectReducer;