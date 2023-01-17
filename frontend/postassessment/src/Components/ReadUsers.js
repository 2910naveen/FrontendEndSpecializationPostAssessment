import React,{Component,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {getUsersData,deleteUsersData} from '../Redux/userSlice';

const ReadUsers = ()=>{
  const users = useSelector((state)=>state.user);
  console.log(users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(getUsersData());
  },[]);

  const updateEditForm = (user)=>{
     navigate('/editUser',{state:user});
  };

  return<>
        <div className="container">
        <table className="table table-hover">
            <thead className="table-primary">
                <tr>
                <th>firstname</th>
                <th>lastname</th>
                <th>email</th>
                <th>phoneno</th>
                <th>course</th>
                <th>edit</th>
                <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {!!users.users.allUsers && users.users.allUsers.map((user,i)=>(<tr key={i}>
                                     <td>{user.firstname}</td>
                                     <td>{user.lastname}</td>
                                     <td>{user.email}</td>
                                     <td>{user.phoneno}</td>
                                     <td>{user.course}</td>
                                     <td><button type="button" className="btn btn-warning" onClick={()=>updateEditForm(user)}>Edit</button></td>
                                     <td><button type="button" className="btn btn-danger" onClick={()=>dispatch(deleteUsersData(user))}>Delete</button></td>
                                     </tr>))}
            </tbody>
        </table>
        </div>
        </>
    
};

export default ReadUsers;