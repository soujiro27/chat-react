import React, {Component} from 'react';
import MessageUSer from './MessageUser'
import axios from 'axios';
import response from './data/messages'
import './styles/MessagesContainer.css'
export default  class Messages extends  Component{

   /*componentDidMount() {
       axios.get('https://huc2m17au1.execute-api.us-west-2.amazonaws.com/production/messages').then((response) => {
           console.log(response)
       })
   }*/
    data = response.messages;

    render() {
        return (
            <div className="Messsages__container">
                {this.data.map((message) => (

                    <MessageUSer message={message.message} id={message.user.id}/>
                ))}
            </div>

        )
    }
}