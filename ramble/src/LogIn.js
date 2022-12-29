import React, {useState} from "react";
import "./LogIn.css"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {Link, useNavigate} from 'react-router-dom'
import {Button} from '@material-ui/core';
import logo from './Assets/white_logo.png';


function Login() {

    const auth = getAuth();

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                
                navigate('/home')
            })
            .catch((error) => {
                alert(error.code)
            });   
    }
    // const [goToTimeline, setGoToTimeline] = React.useState(false);
    
    // if(goToTimeline){
    //     return <Navigate to = "/"></Navigate>;
    // }

    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: '',
    // })

    // const {email, password} = formData

    // const onChange = (e) => {
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         [e.target.id]: e.target.value
    //     }))
    // }

    return  (
        <form className = "log">
            <div className = "cover">
                <img src={logo} alt="Ramble logo" width="300" height="66"/>
                <div className = "user">
                <input className="input_box" type = "email" placeholder = "Email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className = "pass">
                <input className="input_box" type = "password" placeholder = "Password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button variant='outlined' className='login-button' onClick = {SignIn}> Sign in </Button>
                <Link to = "/register" className="register">Don't have an account? Register here.</Link>
            </div>
        </form>
    )
}

export default Login