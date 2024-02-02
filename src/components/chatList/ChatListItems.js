import React from "react";
import Avatar from "./Avatar";
import { FaRegTrashAlt } from "react-icons/fa";
const  ChatListItems= (props)=>{
  const selectChat = (e) => {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };
    return (
      <div
        style={{ animationDelay: `0.${props.animationDelay}s` }}
        onClick={selectChat}
        className={`chatlist__item ${
          props.active ? props.active : ""
        } `}
        key ={props.id}
      >
        <Avatar
          image={
            props.image ? props.image : "http://placehold.it/80x80"
          }
          isOnline={props.isOnline}
        />

        <div className="userMeta">
          <p>{props.name}</p>
        </div>
        <FaRegTrashAlt className="padding-left" onClick={(e)=>{e.preventDefault()
                                                              props.deleteUser(props.id)}}/>
      </div>
      
    );
  }
  export default  ChatListItems;