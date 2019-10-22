import  React,{ Component } from 'react';
import Header from '../components/header';
import Sidebar from '../components/Sidebar'
import Messages from "../components/Messages";
import './styles/Chat.css'

export default class Chat extends  Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="Chat__container">
                    <Sidebar />
                    <Messages />
                </div>
            </div>

        );
    }
}