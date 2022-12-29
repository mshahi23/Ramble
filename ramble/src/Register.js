import React, {useState} from "react";
import "./LogIn.css"
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import logo from './Assets/white_logo.png';
import {Link, useNavigate} from 'react-router-dom'
import {Button} from '@material-ui/core';



function Register() {

    const auth = getAuth();

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                
                updateProfile(auth.currentUser, {
                    displayName: name, 
                })

                navigate('/')
            })
            .catch((error) => {
                alert(error.code)
            });   
    }

    // const [goToSignIn, setGoToSignIn] = React.useState(false);
    
    // if(goToSignIn){
    //     return <Navigate to = "/SignIn"></Navigate>;
    // }

    // const [formData, setFormData] = useState({
    //     username: '',
    //     email: '',
    //     password: '',
    // })

    // const {username, email, password} = formData

    // const navigate = useNavigate()

    // const onChange = (e) => {
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         [e.target.id]: e.target.value
    //     }))
    // }

    // const onSubmit = async (e) => {
    //     e.prevenDefault()

    //     try {
    //         const auth = getAuth()

    //         const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    //         const user = userCredential.user

            // updateProfile(auth.currentUser, {
            //     displayName: username, 
            // })

    //         navigate('/')
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return  (
        <form className = "log">
            <div className = "cover">
                <img src={logo} alt="Ramble logo" width="300" height="66"/>
                <div className = "user">
                <input className="input_box" type = "text" placeholder = "Username" id="name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className = "user">
                <input className="input_box" type = "email" placeholder = "Email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className = "pass">
                <input className="input_box" type = "password" placeholder = "Password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <Button variant='outlined' className='login-button' onClick = {SignUp}> Register </Button>
                <Link to = "/" className="register">Already have an account? Sign in here.</Link>
            </div>
        </form>
    )
}

export default Register