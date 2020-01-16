import React, { useState, useEffect } from 'react';
import Timetable from './TimeTable';
import SubjectPicker from './SubjectPicker';
import Classnames from 'classnames';
import {useSelector, useDispatch} from 'react-redux';
import {setTimetable} from '../actions/index';

function Body() {
    const isSetTimetable = useSelector(state => state.timetable);
    const dispatch = useDispatch();

    useEffect(() => {

    }, []);

    return(
        <div className="container">
            <div>
                <SubjectPicker/>
                <div onClick={() => dispatch(setTimetable())} className={Classnames({'collapse': !isSetTimetable})} style={{position: 'absolute', background: 'white', width: '100%', height: '100%', top: '0', left: '0', opacity: '.9'}}>
                    <button type="button" class="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <Timetable/>
            </div>
        </div>
    );
}

export default Body;