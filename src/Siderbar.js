import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";
export const Siderbar = () => {

  const user=useSelector(selectUser)
  const recentItem = (topic) => {
      
    return <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>;
  };

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://i.pinimg.com/originals/2f/01/f6/2f01f6c9a587820f5c9fed186942a906.jpg"
          alt=""
        />
        <Avatar className="sidebar_avatar">{user.displayName[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,435</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,435</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("Reactjs")}
        {recentItem("Blockchain")}
        {recentItem("JWT")}
        {recentItem("CSS")}

      </div>
    </div>
  );
};
