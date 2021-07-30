import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import FlipMove from "react-flip-move"

import { InputOptions } from "./InputOptions";
import { Post } from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

const Feed = () => {
  const user = useSelector(selectUser);
  const [posts, setposts] = useState([]);
  const [input, setinput] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setposts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPosts = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photourl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setinput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          {/* <Avatar/> */}
          <form>
            <input
              value={input}
              onChange={(e) => setinput(e.target.value)}
              type="text"
            />
            <button onClick={sendPosts} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOptions title="Photo" Icon={ImageIcon} color="blue" />
          <InputOptions title="Video" Icon={SubscriptionsIcon} color="orange" />
          <InputOptions title="Event" Icon={EventNoteIcon} color="green" />
          <InputOptions
            title="Write Article"
            Icon={CalendarViewDayIcon}
            color="red"
          />
        </div>
      </div>
      {/* Post */}
      <FlipMove>
      {posts.map(({ id, data: { name, description, message, photourl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photourl={photourl}
        />
      ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
