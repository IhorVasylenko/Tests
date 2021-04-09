import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://i1.sndcdn.com/avatars-000364583684-50yj9t-t500x500.jpg',
    name: 'Mr. Deadpool',
    message: `Load up on guns and bring your friends.
        It's fun to lose and to pretend.
        She's over-bored and self-assured.
        Oh no, I know a dirty word.`,
    time: '23:59',
}

const alternativeMessageData = {
    avatar: 'https://i1.sndcdn.com/avatars-000364583684-50yj9t-t500x500.jpg',
    name: 'Mr. Deadpool',
    message: `Load up on guns and bring your friends.
        It's fun to lose and to pretend.
        She's over-bored and self-assured.
        Oh no, I know a dirty word.`,
    time: '23:59',
    date: '29 February 2020 '
}



function HW1() {
    return (
        <div>
            <hr/>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            <AlternativeMessage avatar={alternativeMessageData.avatar}
                                name={alternativeMessageData.name}
                                message={alternativeMessageData.message}
                                time={alternativeMessageData.time}
                                date={alternativeMessageData.date}/>
            <hr/>
        </div>
    )
}

export default HW1
