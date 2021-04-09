import React from 'react'
import style from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={style.container}>
            <div className={style.authorAvatar}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={style.x}></div>
            <div className={style.messageWrapper}>
                <div className={style.authorName}>{props.name}</div>
                <div className={style.messageText}>{props.message}</div>
                <div className={style.dateOfPost}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
