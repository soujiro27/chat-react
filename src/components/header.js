import React, {Component} from 'react';
import Avatar from './avatar';
import avatarImg from '../images/bender.jpg';
import Icon from './Icon';

import './styles/Header.css'
const header = () => (
  <header>
      <div className="Header__buttons">
          <button>Lorem</button>
          <button className="Header__buttons-pushed">Ipsum</button>
          <button>Dolor</button>
      </div>
      <div className="Header__title">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="Header__icons">
          <Icon iconName="fas fa-rocket"></Icon>
          <Icon iconName="fas fa-trophy"></Icon>
          <Icon iconName="fas fa-trophy"></Icon>
          <Avatar avatar={avatarImg}/>
      </div>

  </header>
);

export default header;