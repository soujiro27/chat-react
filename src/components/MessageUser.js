import React from 'react';
import Avatar from "./avatar";
import bender from "../images/bender.jpg";
import pepino from '../images/pickle.png'
import './styles/Message.css'

const Message = (props) => (
    <div className="Message">
        <div className="Message__user">
            <Avatar avatar={props.id=='1'? bender : pepino}/>
            <p className="Message__user-name">Bender</p>
            <p className="Message__user-date">6 Nov - 1:37 PM</p>
        </div>
        <div className="Message__text">
            <p>{props.message}</p>
        </div>
    </div>
);

export default Message;