import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../contexts/UserContext"

const Header = () => {
    const {user,logOut}=useContext(AuthContext);
    console.log(user);
    const handleSinOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    }
   

    return (
        <div>
            
            <div className="navbar bg-primary text-primary-content">
                <Link to="/" className="btn btn-ghost normal-case text-xl">AKHT</Link>
                <Link to="/home" className="btn btn-ghost normal-case text-xl">Home</Link>
                <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link>
                <Link to="/register" className="btn btn-ghost normal-case text-xl">Register</Link>
                {
                    user?.email && <p>Welcome {user.email}</p>
                }
                {
                    user?.email? <button onClick={handleSinOut} className="btn btn-sm">Sin Out</button> :
                    <Link to="/login"><button className="btn btn-sm">Sin In</button></Link>
                }

               
            </div>
        </div>
    );
};

export default Header;