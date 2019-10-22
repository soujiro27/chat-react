import React, {Component} from 'react';
import Logo from '../images/logo.png';
import Icon from './Icon';
import './styles/SideBar.css';
import bender from '../images/bender.jpg';
import  pickle from '../images/pickle.png';
import morty from '../images/morty.jpeg';
import Favorites from "./favorites";
export default class Sidebar extends Component {

    favorites = [
        {
            image:bender,
            name:'Bender',
            color:'green'
        },
        {
            image:pickle,
            name:'Pickle',
            color:'yellow'
        },
        {
            image:morty,
            name:'Canal',
            color:'red'
        }

    ];
    recientes = [
            {
                image:bender,
                name:'Bender',
                color:'green'
            },
            {
                image:pickle,
                name:'Pickle',
                color:'yellow'
            },
            {
                image:morty,
                name:'Canal',
                color:'red'
            },
            {
                image:pickle,
                name:'Pickle',
                color:'red'
            },
            {
                image:morty,
                name:'Canal',
                color:'green'
            }
    ];
    canales = [
        {
            image:bender,
            name:'canales',
            color:'green'
        },
        {
            image:pickle,
            name:'canales',
            color:'yellow'
        },
        {
            image:morty,
            name:'canales',
            color:'red'
        },
        {
            image:pickle,
            name:'canales',
            color:'red'
        },
        {
            image:morty,
            name:'canales',
            color:'green'
        }
    ];
    render() {
        return(
            <div className="Sidebar">
                <div className="Sidebar__logo__container">
                    <img src={Logo} alt="Logo" className="" />
                    <Icon iconName='fas fa-bars' />
                </div>
                <div className="Sidebar__status__container">
                    <div className="Sidebar__status-check">
                        <Icon iconName='fas fa-circle' />
                        <Icon iconName='fas fa-sort-down' />
                    </div>
                    <div className="Sidebar__status-text">
                        <span>Trabajando Remotamente</span>
                        <Icon iconName='fas fa-sort-down' />
                    </div>
                </div>
                <div className="Sidebar__search__container">
                    <input type="search" placeholder='Buscar Personas o Canales'/>
                </div>
                <div className="Sidebar__favorites">
                    <p className="Sidebar__title">Favoritos</p>
                    {
                        this.favorites.map((favorite) => (
                            <Favorites
                                color={favorite.color}
                                name={favorite.name}
                                image={favorite.image}
                            />
                        ))
                    }
                </div>
                <div className="Sidebar__favorites">
                    <p className="Sidebar__title">Recientes</p>
                    {
                        this.recientes.map((favorite) => (
                            <Favorites
                                color={favorite.color}
                                name={favorite.name}
                                image={favorite.image}
                            />
                        ))
                    }
                </div>
                <div className="Sidebar__favorites">
                    <p className="Sidebar__title">Canales</p>
                    {
                        this.canales.map((favorite) => (
                            <Favorites
                                color={favorite.color}
                                name={favorite.name}
                                image={favorite.image}
                            />
                        ))
                    }
                </div>
                <div className="Sidebar__favorites">
                    <p className="Sidebar__title">Personas</p>
                    {
                        this.recientes.map((favorite) => (
                            <Favorites
                                color={favorite.color}
                                name={favorite.name}
                                image={favorite.image}
                            />
                        ))
                    }
                </div>

            </div>
        )
    }
}