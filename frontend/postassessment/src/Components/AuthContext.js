
import React from 'react';
import { useContext,useState } from 'react';

const UserContext = React.createContext();

const AuthContext = ({children})=>{

    const [user,setUser] = useState('');

    const login = (username)=>{
       console.log(username);
       setUser(username);   
    }

    const logout = ()=>{
        setUser('');
    }

    return <UserContext.Provider value={{user,login,logout}}>
             {children}
           </UserContext.Provider>
};

export default AuthContext;

export const useCustomAuth = ()=>{
     return useContext(UserContext);
};