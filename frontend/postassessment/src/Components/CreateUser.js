import React,{Component, useState} from 'react';
import {postUserData} from '../Redux/userSlice';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreateUser = ()=>{
    
    const [student,setStudent] = useState({firstname:'',lastname:'',email:'',phoneno:'',course:''});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleChange = (e)=>
    {
        var newStudent = {...student};
        newStudent[e.target.name] = e.target.value;
        setStudent(newStudent);
    };

    const handleSubmit =async ()=>{
        await dispatch(postUserData(student));
        setTimeout(()=>{
            navigate('/readUser');
        },1000);
        console.log(student);
        clearForm();
    }

    const clearForm = ()=>{
        setStudent({firstname:'',lastname:'',email:'',phoneno:'',course:''});
    }

    return <>
           <h2>Student Registration Form</h2>
           <label htmlFor='firstname'>FirstName:</label>
           <input type="text" name="firstname" id="firstname" onChange={(e)=>handleChange(e)} value={student.firstname} /><br/><br/>
           <label htmlFor='lastname'>LastName:</label>
           <input type="text" name="lastname" id="lastname" onChange={(e)=>handleChange(e)} value={student.lastname} /><br/><br/>
           <label htmlFor='email'>Email:</label>
           <input type="text" name="email" id="email" onChange={(e)=>handleChange(e)} value={student.email} /><br/><br/>
           <label htmlFor='phoneno'>PhoneNo:</label>
           <input type="text" name="phoneno" id="phoneno" onChange={(e)=>handleChange(e)} value={student.phoneno} /><br/><br/>
           <label htmlFor='course'>Course:</label>
           <input type="text" name="course" id="course" onChange={(e)=>handleChange(e)} value={student.course} /><br/><br/>
           <button type="button" className="btn btn-primary" onClick={()=>handleSubmit()}>Submit</button>
           </>
};

export default CreateUser;