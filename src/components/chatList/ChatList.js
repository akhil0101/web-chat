import React, { useState } from "react";
import "./chatList.css";
import  {chatConstants} from '../../serives/usersConstants'
import ChatListItems from "./ChatListItems";

const  ChatList = ()=> {
  const [allChatsUsers, setallChats] = useState(chatConstants.allChatUsers);
  const OndeleteClick = (key) =>{
   let updatedusers =  allChatsUsers.filter(user => user.id !== key)
   setallChats(updatedusers)
  }
    return (
      <div className="main__chatlist">
        {/* <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button> */}
        <div className="chatlist__heading">
          <h2>Chats</h2>
          {/* <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button> */}
        </div>
         {/* <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required /> 
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div> */}
        <div className="chatlist__items">
          {allChatsUsers.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
                deleteUser = {()=>OndeleteClick(item.id)}
              />
            );
          })}
        </div>
      </div>
    );
  }

export default  ChatList;
