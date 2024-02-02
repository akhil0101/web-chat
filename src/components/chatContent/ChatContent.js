import React, { useState, useRef, useEffect } from "react";
import "./chatContent.css";
import  {chatConstants} from '../../serives/usersConstants'
import ChatItem from "./ChatItem";

const ChatContent = (props)=> {
  const messagesEndRef = useRef(null);
  const [chat,setChat] = useState(chatConstants.chatItems)
  const [msg,setMessage] = useState('')

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const pushMessage =() =>{
      if (msg !== "") {
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes();      
        setChat([...chat,{
          key: chat[chat.length-1].key+1,
          type: "",
          msg: msg,
          timestamp : hour+':'+ min
        }])
        scrollToBottom();
        setMessage('');
      }
  }
  
   useEffect(()=> {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        pushMessage();
      }
    });
    scrollToBottom();
   })
    
  const onStateChange = (e) => {
    setMessage(e.target.value);
  };
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <p>akhil</p>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  timestamp = {itm.timestamp}
                />
              );
            })}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <input
              type="text"
              placeholder="Type a message here"
              onChange={onStateChange}
              value={msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn" onClick={()=> pushMessage()}>
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }

export default ChatContent;
