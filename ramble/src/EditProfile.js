import React, {useState} from 'react';
import Avatar from 'react-avatar-edit';
import {Dialog, DialogTitle, Button} from "@mui/material";
import "./EditProfile.css";
import db from "./firebase";
import {getAuth, updateProfile, updateEmail} from 'firebase/auth';
import {updateDoc, doc} from 'firebase/firestore';
// import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import {getDownloadURL, getStorage, ref, uploadString} from 'firebase/storage';


function EditProfile() {
    const [dialogs, setdialogs] = useState(false);
    const [imgCrop, setimgCrop] = useState(false);
    const [storeImage, setstoreImage] = useState([]);

    const navigate = useNavigate();

    const auth = getAuth();
    const storage = getStorage();

    const img = auth.currentUser.photoURL;

    const [name, setName] = useState(auth.currentUser.displayName)

    const [email, setEmail]  = useState(auth.currentUser.email)

    const profileImage = storeImage.map(item=>item.imgCrop)

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onSave = async () => {
        try {
            if(profileImage.length !== 0){
                const storageRef = ref(storage, auth.currentUser.uid + '.png')
                await uploadString(storageRef, profileImage[0], 'data_url')
                var imgURL = await getDownloadURL(storageRef);
                await updateProfile(auth.currentUser, {
                    photoURL: imgURL,
                    })
            }
            else {
                imgURL = img
            }

            if (name !== auth.currentUser.displayName)
            {
                await updateProfile(auth.currentUser, {
                    displayName: name,
                    })
            }
            
            if (email !== auth.currentUser.email)
            {
                await updateEmail(auth.currentUser, email)
            }

            // navigate('/Profile')
            const userRef = doc(db, 'users', auth.currentUser.uid)
            await updateDoc(userRef, {
                name,
            }).then(
                navigate('/profile')
            )
        } catch (error) {
            //toast.error('Could not update profile details')
        }
    }

    const onCrop = (view) => {
        setimgCrop(view);
    };

    const onClose = () => {
        setimgCrop(null);
    };

    const saveImage = () => {
        setstoreImage([...storeImage, {imgCrop}]);
        setdialogs(false);
    };
       
    function todo(){
        saveImage();
    }

    return(
    <div className='back_edit'>
        <div className = "edit_profile">
        <h1 className='header_text'>Edit Profile</h1>
            <div className = "profile_image">
                <img 
                    style = {{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "4px solid black",
                    }} 
            src = {profileImage.length ? profileImage:img}
            alt = ""
            />

            <Button variant='outlined' className='update_button' onClick = {() => setdialogs(true)}>Update Profile Picture</Button>

            <Dialog
                open = {dialogs}
                onHide = {() => setdialogs(false)}
            >
                <DialogTitle className='update_profile'>Update Profile Picture</DialogTitle>
                <div className = "confirmation">
                    <div className="flex1">
                        <div className = "flex2">
                            <Avatar
                                width = {500}
                                height = {400}
                                onCrop = {onCrop}
                                onClose = {onClose}
                            />
                        </div>
                        <div className= "flex3">
                            <Button variant='outlined' className='dialog_buttons' onClick = {todo}>Save</Button>
                            <Button variant='outlined' className='dialog_buttons' onClick = {() => setdialogs(false)}>Cancel</Button>
                        </div>
                </div>
            </div>
            </Dialog>
            <div className = "info_fields">
                <h3 className='info_text'>Username</h3>
                <input 
                className='input' 
                type='text' 
                placeholder='Username'
                value = {name} 
                onChange = {changeName}></input>
                <h3 className='info_text'>Email</h3>
                <input 
                className='input' 
                type='text' 
                placeholder='Email' 
                value = {email} 
                onChange = {changeEmail}></input>
            </div> 
            <div className='footer_buttons'>
            <Button variant='outlined' className='update_button' onClick = {onSave}>Save</Button>
            </div> 
        </div>  
    </div>
    </div>
    );
};

export default EditProfile