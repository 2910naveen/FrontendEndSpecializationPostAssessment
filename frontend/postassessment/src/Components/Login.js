import React from 'react';
import { useState } from 'react';
import { useCustomAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = ()=>{

    const [user,setUser] = useState({email:'',password:''});

    const navigate = useNavigate();

    const auth = useCustomAuth();

    const handleChange = (e)=>{
        var newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    };

    const handleSubmit = ()=>{
       auth.login(user.email);
       navigate('/readUser');
    };

    return <>
           <h2>The Login Page</h2>
           <label htmlFor='email'>UserName:</label>
           <input type="text" name="email" id="email" onChange={(e)=>handleChange(e)} value={user.email} /><br/><br/>
           <label htmlFor='password'>Password:</label>
           <input type="password" name="password" id="password" onChange={(e)=>handleChange(e)} value={user.password}/><br/><br/>
           <button type="button" className="btn btn-primary" onClick={()=>handleSubmit()}>Submit</button>
           </>
};

export default Login;