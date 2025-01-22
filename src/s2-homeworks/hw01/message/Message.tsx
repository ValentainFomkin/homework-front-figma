import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    const {message} = props

    const name = message.user.name
    const text = message.message.text

    return (
        <div id={'hw1-message-' + message.id} className={s.message}>
            <div className={s.imageAndText}>
                <div className={s.image}>
                    <img id={'hw1-avatar-' + message.id}
                         src={message.user.avatar}
                    />
                </div>
                <div className={s.text}>
                    <div id={'hw1-name-' + message.id} className={s.name}>
                        {name.trim() !== '' && name}

                        {/**/}
                    </div>
                    <div id={'hw1-text-' + message.id} className={s.messageText}>
                        {text.trim() !== '' && text}

                        {/**/}
                    </div>
                </div>
            </div>
            <div id={'hw1-time-' + message.id} className={s.time}>
                {message.message.time}

                {/**/}
            </div>
        </div>
    )
}

export default Message
