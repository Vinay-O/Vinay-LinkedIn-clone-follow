import { Avatar } from '@mui/material'
import React from 'react'
import Inputoption from './InputOption'
import "./post.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Post({name,description, message,photoUrl}) {
  return (
    <div className='post'>
        <div className="post_header">
            <Avatar/>
                <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_body">
            <p>{message}</p>
        </div>
        <div className="post_buttons">
            <Inputoption Icon={ThumbUpIcon} title='Liked' color='gray'/>
            <Inputoption Icon={CommentIcon} title='Comment' color='gray'/>
            <Inputoption Icon={ShareIcon} title='Share' color='gray'/>
            <Inputoption Icon={SendIcon} title='Send' color='gray'/>
        </div>
     </div>
  )
}

export default Post