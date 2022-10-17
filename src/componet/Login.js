import React, { useContext } from 'react'; 
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import loginImage from '../Images/login.60b00691.png';

const Login = () => {
    const {login,googleSinIn}=useContext(AuthContext);
    console.log(login);
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        login(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            form.reset();
        })
        .catch(error=>{
            console.error("error",error);
        })
      
      
    }
    const handleGoogleSinIn=()=>{
        googleSinIn()
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(error=>console.error(error))

      }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                      
                         <img src={loginImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleFormSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                           
                        </form>
                        <button onClick={handleGoogleSinIn} className="btn btn-outline btn-success">Google Sin In</button>
                       
                        <Link to="/register">Don’t have a account? <button className="btn btn-link">Register Now</button></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;