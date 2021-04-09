import React from 'react'
import style from './AlternativeMessage.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
    date: string
}

function AlternativeMessage(props: PropsType) {
    return (
        <div className={style.container}>
            <div className={style.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={style.wrapper}>
                <div className={style.date}>{props.date}</div>
                <div className={style.messageWrapper}>
                    <div className={style.authorName}>{props.name}</div>
                    <div className={style.messageText}>{props.message}</div>
                    <div className={style.messageTime}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default AlternativeMessage
