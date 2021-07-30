import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './HeaderOptions.css'
const HeaderOptions = ({ avatar,title,Icon,onClick}) => {

    const user = useSelector(selectUser)
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption_icon"/>}
            {avatar && <Avatar className="headerOption_icon"  src="" >{user?.email[0]}</Avatar>}
            <h3 className="headerOption_title">{title}</h3>
        </div>
    )
}

export default HeaderOptions
