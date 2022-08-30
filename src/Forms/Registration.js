import React, { useState, setState } from 'react';
import { useNavigate} from 'react-router-dom';
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";
import './style.css'

function Registration() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "email"){
            setEmail(value);
        }

    }

    const handleSubmit = () =>{
        
        let obj={firstName,
            email}   
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        return update(ref(database), updates, alert("Thanks for signing up. We will be in touch!"), navigate('/'));
        
    }
    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" htmlFor="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="email">
                    <label className="form__label" htmlFor="email">Email </label>
                    <input  type="text" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
            </div>
            <div className="footer">
                <button onClick={()=>handleSubmit()} variant="primary" type="submit" className="btn">Register</button>
            </div>
        </div> 
    )       
}
export default Registration;