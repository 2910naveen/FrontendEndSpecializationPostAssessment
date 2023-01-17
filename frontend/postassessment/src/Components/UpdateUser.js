import React,{Component, useState,useEffect} from 'react';
import {updateUserData} from '../Redux/userSlice';
import {useDispatch} from 'react-redux';
import { useNavigate,useLocation } from 'react-router-dom';

const UpdateUser = ()=>{
    
    const [student,setStudent] = useState({firstname:'',lastname:'',email:'',phoneno:'',course:''});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {state} = useLocation();
    
    useEffect(()=>{
      !!state && setStudent(state);
    },[]);
    
    const handleChange = (e)=>
    {
        var newStudent = {...student};
        newStudent[e.target.name] = e.target.value;
        setStudent(newStudent);
    };

    const handleUpdate =async ()=>{
        await dispatch(updateUserData(student));
        navigate('/readUser');
        console.log(student);
        clearForm();
    }

    const clearForm = ()=>{
        setStudent({firstname:'',lastname:'',email:'',phoneno:'',course:''});
    }

    return <>
           <h2>Student Upgradation Form</h2>
           <label htmlFor='firstname'>FirstName:</label>
           <input type="text" name="firstname" id="firstname" onChange={(e)=>handleChange(e)} value={student.firstname} /><br/><br/>
           <label htmlFor='lastname'>LastName:</label>
           <input type="text" name="lastname" id="lastname" onChange={(e)=>handleChange(e)} value={student.lastname} /><br/><br/>
           <label htmlFor='email'>Email:</label>
           <input type="text" name="email" id="email" onChange={(e)=>handleChange(e)} value={student.email} disabled={true} /><br/><br/>
           <label htmlFor='phoneno'>PhoneNo:</label>
           <input type="text" name="phoneno" id="phoneno" onChange={(e)=>handleChange(e)} value={student.phoneno} /><br/><br/>
           <label htmlFor='course'>Course:</label>
           <input type="text" name="course" id="course" onChange={(e)=>handleChange(e)} value={student.course} /><br/><br/>
           <button type="button" className="btn btn-primary" onClick={()=>handleUpdate()}>Update</button>
           </>
};

export default UpdateUser;