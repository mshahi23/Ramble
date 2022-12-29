import React, {forwardRef} from 'react'
import "./Post.css"
import { Avatar } from "@material-ui/core";
// import * as Icons from 'react-feather';
// import {Button} from '@material-ui/core';


const Post = forwardRef(({id, username, avatar, title, topic, text, media, time}, ref)=> {

    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headertext">
                        <h3> {username} </h3>
                    </div>
                    <div className="post__headerTitle">
                        <h4>{title}</h4>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
            <img src={media} alt="" />
            <div className="post__headerTopic">
                <h3>{topic}</h3>
                <h3>{time}</h3>
            </div>
            {/* <div className="post__footer">
                <Button className='footer__icon'><Icons.CornerDownLeft fontSize="small" /></Button>
                <Button className='footer__icon'><Icons.Heart fontSize="small"/></Button>
                <Button className='footer__icon'><Icons.Edit2 fontSize="small"/></Button>
                <Button><Icons.Trash2 fontSize="small"/></Button>
            </div> */}
            </div>
        </div>
    );
});

export default Post