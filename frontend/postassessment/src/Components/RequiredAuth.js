import React from 'react';
import { useCustomAuth } from './AuthContext';
import {Link} from 'react-router-dom';



const RequiredAuth = ({children})=>{

    const username = useCustomAuth();

    return <>
           { !!username.user ? children : <div><h2>Please Login !!</h2><button className="btn btn-warning"><Link to='/login'>move to Login Page</Link></button></div>}
           </>
};

export default RequiredAuth;

