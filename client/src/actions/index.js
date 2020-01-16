import { SET_TIMETABLE, SET_LIST_SUBJECTS, UNSET_LIST_SUBJECTS, SET_CHOSEN_SUBJECT, UNSET_CHOSEN_SUBJECT, SET_VALID_TIMETABLE, SET_IS_VALID_TIMETABLE } from './action-type';

export function setTimetable(payLoad){
    return {type: SET_TIMETABLE, payLoad};
}

export function setListSubject(payLoad){
    return {type: SET_LIST_SUBJECTS, payLoad};
}

export function unsetListSubject(){
    return {type: UNSET_LIST_SUBJECTS};
}

export function setChosenSubject(payLoad){
    return {type: SET_CHOSEN_SUBJECT, payLoad: payLoad};
}

export function unsetChosenSubject(payLoad){
    return {type: UNSET_CHOSEN_SUBJECT, payLoad: payLoad};
}

export function setValidTimetable(payLoad){
    return {type: SET_VALID_TIMETABLE, payLoad: payLoad};
}

export function setIsValidTimetable(payLoad){
    return {type: SET_IS_VALID_TIMETABLE, payLoad: payLoad};
}