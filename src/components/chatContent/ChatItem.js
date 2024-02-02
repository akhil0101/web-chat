import React from "react";

const ChatItem =(props)=> {
    return (
      <div
        style={{ animationDelay: `0.8s` }}
        className={`chat__item ${props.user ? props.user : ""}`}
      >
        <div className="chat__item__content">
          <div className="chat__msg">{props.msg}</div>
          <div className="chat__meta">
            <span>Seen-{props.timestamp}</span>
          </div>
        </div>
      </div>
    );
}

export default ChatItem
