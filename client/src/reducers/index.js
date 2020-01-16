import { SET_TIMETABLE } from "../actions/action-type";
import {combineReducers} from 'redux';
import setTimetable from './setTimetable';
import setListSubjects from './setListSubjects';
import setChosenSubject from './setChosenSubject';
import setValidTimetable from './setValidTimetable';
import setIsValidTimetable from './setIsValidTimetable';

const rootReducer = combineReducers({
    timetable: setTimetable,
    listSubjects: setListSubjects,
    chosenSubjects: setChosenSubject,
    validMatrix: setValidTimetable,
    isValidTimetable: setIsValidTimetable,
});

export default rootReducer;