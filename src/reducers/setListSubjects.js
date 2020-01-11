import { SET_LIST_SUBJECTS, UNSET_LIST_SUBJECTS } from "../actions/action-type";

function listSubjectsReducer(state = [], action){
    switch(action.type){
        case SET_LIST_SUBJECTS: {
            return state.concat(action.payLoad);
        }
        case UNSET_LIST_SUBJECTS: {
            return state = [];
        }
        default:
            return state;
    }
}

export default listSubjectsReducer;