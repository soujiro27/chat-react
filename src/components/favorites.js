import  React from 'react';
import Avatar from './avatar'
import './styles/Favorites.css'

const Favorites = (props) => (
    <div className="Favorite__badge">
        <i className="fas fa-circle" id={props.color}></i>
        <Avatar avatar={props.image} />
        <p>{props.name}</p>
    </div>
)

export default  Favorites;