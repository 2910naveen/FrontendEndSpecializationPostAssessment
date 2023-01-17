import React from 'react';
import { Link } from 'react-router-dom';
import { useCustomAuth } from './AuthContext';

const NavBar = () => {

    const username = useCustomAuth();
    console.log(username);
    const handleLogout = ()=>{
        username.logout();
    };

    return <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light container navbar-styling">
                <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/'>CreateUser</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/readUser'>ReadUsers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/editUser'>UpdateUser</Link>
                    </li>
                    {username.user ? <li className="nav-item active">
                                         <Link className="nav-link" onClick={()=>handleLogout()} >Logout</Link>
                                       </li>:<li className="nav-item active">
                                             <Link className="nav-link" to='/login'>Login</Link>
                                             </li>}
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control-serach mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0 navbar-button" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </>
};

export default NavBar;