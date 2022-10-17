import { Result } from 'postcss';
import React, { useContext } from 'react'; 
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import registationImage from "../Images/register.e58071de.png"

const Register = () => {
    const {userRegister}=useContext(AuthContext);
    
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password);
        userRegister(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(error=>{
            console.error("Error",error);
        })


    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                      
                         <img src={registationImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleFormSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Registation</button>
                            </div>
                        </form>
                        <Link to="/login">Already have a account? <button className="btn btn-link">Log In</button></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;