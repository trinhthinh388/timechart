import React,{useState, useEffect, useRef} from 'react';
import { render } from '@testing-library/react';
import '../css/SubjectPicker.css';
import Classnames from 'classnames';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {setTimetable, setListSubject, unsetListSubject, setChosenSubject, unsetChosenSubject, setValidTimetable, setIsValidTimetable} from '../actions/index';

function SubjectPicker() {

    const [searchData, setSearchData] = useState([]);
    const chosenSubjectText = useRef("");
    const listSubject = useSelector(state => state.listSubjects);
    const chosenSubject = useSelector(state => state.chosenSubjects);
    const validMatrix = useSelector(state => state.validMatrix);
    const isValidTimetable = useSelector(state => state.isValidTimetable);
    const timeOutObj = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:7000/api/subjects')
            .then(res => {
                dispatch(setListSubject(res.data.subjects));
                setSearchData(res.data.subjects);
            })
            .catch(err=>{
                throw err;
            })
    }, []);

    function renderListSubject(data){
        return(
            <li key={data.id} style={{cursor: 'pointer'}} onClick={onSubjectClickHandle.bind(this, data)} className={Classnames("list-subject border-left-0 rounded-0 border-right-0 border-top-0 list-group-item", "list-subject border-left-0 rounded-0 border-right-0 border-top-0 list-group-item", {"custom-active": chosenSubject.find(e => e._id === data._id)})}>
                <div>
                    <span className="pr-3 font-weight-bolder">{data.code}</span>
                    <span className="pr-3">{data.name}</span>
                    <span className="pr-3 font-weight-bold">{data.ecturer}</span>
                    <span className="pr-3">{data.credits} tín chỉ</span>
                    <span className="pr-3 text-subject">Thứ {data.dow === undefined ? '*' : data.dow}</span>
                    <span className="pr-3 text-subject">Tiết {data.lessons === "" ? '*' : data.lessons}</span>
                    <span className="pr-3">{data.lang}</span>
                </div>
            </li>
        );
    }

    function checkingValid(newSubject){
        let tempMatrix = validMatrix;
        let day = newSubject.dow;

        if(day === undefined || day === '*' || day === null)
        {
            dispatch(setValidTimetable(tempMatrix));
            dispatch(setChosenSubject(newSubject));
            chosenSubjectText.current = chosenSubjectText.current.concat(newSubject.code + '\n');
            return;
        }
        let lessons = newSubject.lessons === '*' ? null : newSubject.lessons.split('').map(e => {
            if(e === '0')
                return 10;
            return parseInt(e);
        });

        if(tempMatrix[lessons[0] - 1][day-2] !== null)
        {
            clearTimeout(timeOutObj.current);
            dispatch(setIsValidTimetable(false));
            timeOutObj.current = setTimeout(() => {
                dispatch(setIsValidTimetable(true));
            }, 5000);
            return;
        }
            tempMatrix[lessons[0] - 1][day-2] = `${newSubject.name}.${lessons.length}.${newSubject.code}`;

        for(let i = 1; i < lessons.length; ++i){
            if(tempMatrix[lessons[i] - 1][day - 2] === null){
                tempMatrix[lessons[i] - 1][day - 2] = `collapse`;
            }
            else{
                clearTimeout(timeOutObj.current);
                dispatch(setIsValidTimetable(false));
                timeOutObj.current = setTimeout(() => {
                    dispatch(setIsValidTimetable(true));
                }, 5000);
                return;
            }
        }
        dispatch(setValidTimetable(tempMatrix));
        dispatch(setChosenSubject(newSubject));
        chosenSubjectText.current = chosenSubjectText.current.concat(newSubject.code + '\n');
    }

    function onSubjectClickHandle(data) {
        if(!chosenSubject.find(e => e._id === data._id)){
            if(chosenSubject.find(e => e.name === data.name)){
                clearTimeout(timeOutObj.current);
                dispatch(setIsValidTimetable(false));
                timeOutObj.current = setTimeout(() => {
                            dispatch(setIsValidTimetable(true));
                        }, 5000);
            }
            else{
                checkingValid(data);
            }
        }
        else{
            let tempMatrix = validMatrix;
            let day = data.dow;

            if(day === undefined || day === '*' || day === null)
            {
                dispatch(unsetChosenSubject(data));
                chosenSubjectText.current = chosenSubjectText.current.replace(data.code + '\n', '');
                return;
            }
            let lessons = data.lessons === '*' ? null : data.lessons.split('').map(e => {
                if(e === '0')
                    return 10;
                return parseInt(e);
            });

            for(let i = 0; i < lessons.length; ++i){
                tempMatrix[lessons[i] - 1][day - 2] = null;
            }
            
            dispatch(unsetChosenSubject(data));
            chosenSubjectText.current = chosenSubjectText.current.replace(data.code + '\n', '');
        }
    }

    function onSubjectTextHandle(e){
        //dispatch(setListSubject(e.target.value));
    }

    function onButtonClickHandle(e){
        dispatch(setTimetable());
        e.preventDefault();
    }

    function onSearchChange(e){
        let sample = listSubject.filter(data => {
            if(data.code.toLowerCase().includes(e.target.value.toLowerCase())  ||  data.name.toLowerCase().includes(e.target.value.toLowerCase())){
                return true;
            }
            return false;
        });

        setSearchData(sample);
    }

    return(
        <div>
            <form>
                {
                    !isValidTimetable ? 
                    (
                        <div class={Classnames("alert alert-danger animation")} role="alert">
                            Thông tin không hợp lệ (Môn học đã được đăng kí hoặc thời gian bị trùng)
                        </div>
                    )
                    :
                    <label htmlFor="">Điền mã môn muốn đăng kí (mỗi mã môn nằm trên một dòng)</label>
                }
                <textarea value={chosenSubjectText.current} onChange={onSubjectTextHandle} className="form-control" id="" style={{resize: "none"}} rows="5"/>
                <label htmlFor="">Chọn môn muốn đăng kí</label>
                <div>
                    <input onChange={onSearchChange} className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                    <div className="mt-2">
                        <ul style={{height: '35vh', overflow: 'scroll', overflowX: 'hidden'}} className="p-2 border rounded list-group">
                            {searchData.map(subject => {
                                if(subject)
                                {
                                    return renderListSubject(subject);
                                }
                            })}
                        </ul>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <button onClick={onButtonClickHandle} className="btn btn-dark" type="submit">Tạo thời khoá biểu</button>
                </div>
            </form>
        </div>
    );
}

export default SubjectPicker;