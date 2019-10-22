import React from 'react';
import './styles/Avatar.css';

const Avatar = (props) => (
    <div className="Avatar">
        <img src={props.avatar} alt="" className="Avatar__image"/>
    </div>
);

export  default  Avatar;