import React, { useRef, useEffect } from 'react';
import '../css/Timetable.css';
import Classnames from 'classnames';
import {useSelector} from 'react-redux';
import { render } from '@testing-library/react';

function Timetable(props) {

    const isSetTimetable = useSelector(state => state.timetable);
    const validMatrix = useSelector(state => state.validMatrix);
    const days = [0,1,2,3,4,5];
    const remainMorningRow = true;
    const isFirst = true;

    function renderColumn(number){
        validMatrix.forEach(day => {
            console.log(day);
        });
    }

    return(
        <div className={Classnames("shadow dialog small text-center position-absolute", {"collapse": !isSetTimetable})}>
            <table className="table table-bordered table-hover">
                        <tr class="bg-secondary text-light">
                            <th>Thứ/ tiết</th>
                            <th>Thứ 2</th>
                            <th>Thứ 3</th>
                            <th>Thứ 4</th>
                            <th>Thứ 5</th>
                            <th>Thứ 6</th>
                            <th>Thứ 7</th>
                        </tr>
                        <tr>
                            <th>Tiết 1</th>
                            {
                                days.map(d => {
                                    return renderColumn(1);
                                })
                            }
                        </tr>
                        <tr>
                            <th>Tiết 2</th>

                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <th>Tiết 3</th>

                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <th>Tiết 4</th>

                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <th>Tiết 5</th>

                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <th>Tiết 6</th>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <th>Tiết 7</th>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <th>Tiết 8</th>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <th>Tiết 9</th>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <th>Tiết 10</th>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                        </tr>
                    </table>
        </div>
    );
}

export default Timetable;