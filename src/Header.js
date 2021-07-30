import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import HeaderOptions from './HeaderOptions';
import SuperviserAccountIcon from '@material-ui/icons/SupervisorAccount'
 import BussinessCentreIcon from '@material-ui/icons/BusinessCenter'
 import ChatIcon from '@material-ui/icons/Chat'
 import NotificationsIcon from '@material-ui/icons/Notifications'
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

export const Header = () => {

    const dispatch = useDispatch()
    const logofApp=()=>{
        dispatch(logout())
        auth.signOut();
    }
    return (
        <div className="header">
            
            <div className="header_left">

                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin_logo"/>
                <div className="header_search">
                {/* SearchIcon */}
                <SearchIcon/>
                <input placeholder="Search" type="text"/>
                </div>
            </div>
            <div className="header_right">
                <HeaderOptions Icon ={HomeIcon} title="Home"/>
                <HeaderOptions Icon={SuperviserAccountIcon} title="My Network"/>
                <HeaderOptions Icon={BussinessCentreIcon} title="Jobs"/>

                <HeaderOptions Icon={ChatIcon} title="Messaging"/>

                <HeaderOptions Icon={NotificationsIcon} title="Notifications"/>

                <HeaderOptions avatar={true} title="Me" onClick={logofApp} />


            </div>

        </div>
    )
}
