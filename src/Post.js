import React, { forwardRef } from 'react'
import {Avatar} from '@material-ui/core'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import './Post.css'
import { InputOptions } from './InputOptions'
export const Post =forwardRef( ({name,description,message,photourl},ref) => {
    return (
        <div ref={ref} className="post">

        <div className="post_header">
            <Avatar src={photourl}>{name[0]}</Avatar>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post_body">
            <p>{message}</p>
        </div>

        <div className="post_buttons">
            <InputOptions Icon={ThumbUpAltOutlinedIcon} title="like" color="gray" />
            <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray" />

            <InputOptions Icon={ShareOutlinedIcon} title="Share" color="gray" />
            <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray" />

        </div>
            
        </div>
    )
})
