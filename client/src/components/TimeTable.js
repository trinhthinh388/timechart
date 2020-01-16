import React, { useRef, useEffect } from 'react';
import '../css/Timetable.css';
import Classnames from 'classnames';
import {useSelector} from 'react-redux';
import { render } from '@testing-library/react';

function Timetable(props) {

    const isSetTimetable = useSelector(state => state.timetable);
    const validMatrix = useSelector(state => state.validMatrix);
    const chosenSubjects = useSelector(state => state.chosenSubjects);
    const days = [0,1,2,3,4,5];
    const remainMorningRow = true;
    const isFirst = true;

    function renderColumn(day, lesson){
        console.log(day + ' and' + lesson);
        if(validMatrix[lesson][day] === null)
        {
            return <td className="bg-light" style={{"width": "16.66%"}}>Empty</td>
        }
        else if(validMatrix[lesson][day] === 'collapse'){
            return <td className="bg-info text-white font-weight-bold" style={{"width": "16.66%"}} className="collapse">Nothing</td>
        }
        else{
            let data = validMatrix[lesson][day].split('.');
        return <td className="bg-info text-white align-middle font-weight-bold text-break" style={{"width": "16.66%"}} rowSpan={parseInt(data[1])}>{data[0]}<br/>{data[2]}.{data[3]}</td>
        }
    }

    return(
        <div className={Classnames("shadow dialog small text-center position-absolute", {"collapse": !isSetTimetable})}>
            <table className="table table-bordered table-hover table-responsive">
                        <tr class="bg-secondary text-light">
                            <th>Thứ/ tiết</th>
                            <th>Thứ 2</th>
                            <th>Thứ 3</th>
                            <th>Thứ 4</th>
                            <th>Thứ 5</th>
                            <th>Thứ 6</th>
                            <th>Thứ 7</th>
                        </tr>
                        <tr className="">
                            <th scope="row">Tiết 1</th>
                            {
                                days.map(day => {
                                    return renderColumn(day, 0);
                                })
                            }
                        </tr>
                        <tr className="">
                            <th scope="row">Tiết 2</th>
                            {
                                days.map(day => {
                                    return renderColumn(day, 1);
                                })
                            }
                        </tr>
                        <tr className="">
                            <th scope="row">Tiết 3</th>
                            {
                                days.map(day => {
                                    return renderColumn(day, 2);
                                })
                            }
                        </tr>
                        <tr className="=">
                            <th scope="row">Tiết 4</th>
                            {
                                days.map(day => {
                                    return renderColumn(day, 3);
                                })
                            }
                        </tr>
                        <tr className="">
                            <th scope="row">Tiết 5</th>
                            {
                                days.map(day => {
                                    return renderColumn(day, 4);
                                })
                            }
                        </tr>
                        <tr className="">
                            <th scope="row">Tiết 6</th>
                            {
                                days.map(day => {
                                    return renderColumn(day, 5);
                                })
                            }
                        </tr>
                        <tr className="">
                            <th scope="row">Tiết 7</th>
                            {
                                days.map(day => {
                                    return renderColumn(day, 6);
                                })
                            }
                        </tr>
                        <tr className="">
                            <th scope="row">Tiết 8</th>
                            {
                                days.map(day => {
                                    return renderColumn(day, 7);
                                })
                            }
                        </tr>
                        <tr className="">
                            <th scope="row">Tiết 9</th>
                            {
                                days.map(day => {
                                    return renderColumn(day, 8);
                                })
                            }
                        </tr>
                        <tr className="">
                            <th scope="row">Tiết 10</th>
                            {
                                days.map(day => {
                                    return renderColumn(day, 9);
                                })
                            }
                        </tr>
                        {
                            chosenSubjects.map(subject => {
                                let day = subject.dow;
                                if(day === undefined || day === '*' || day === null)
                                {
                                return (
                                    <tr className="bg-warning border border-dark p-3 m-2 text-center align-middle font-weight-bold">
                                <td colSpan={7} className="bg-info text-white font-weight-bold" style={{"width": "16.66%"}} className="">{subject.name}<br/>{subject.code}</td>
                                        
                                    </tr>
                                );
                                }
                            })
                        }
                    </table>
        </div>
    );
}

export default Timetable;