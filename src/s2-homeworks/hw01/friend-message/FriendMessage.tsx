import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

export type FriendMessageType = {
    message: MessageType

}
// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessageType) => {
    return (
        <div id={'hw1-friend-message-' + props.message.id}
             className={s.friendMessage}>
            <div className={s.friendImageAndText}>
                <div className={s.friendText}>
                    <div id={'hw1-friend-name-' + props.message.id}
                         className={s.friendName}>
                        <span>{props.message.user.name}</span>
                        {/**/}
                    </div>
                    <div
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}>
                        <span>{props.message.message.text}</span>
                        {/**/}
                    </div>
                </div>
                <div className={s.image}>
                    <img
                        id={'hw1-friend-avatar-' + props.message.id}
                        src={props.message.user.avatar}
                    />
                </div>
            </div>
            <div id={'hw1-friend-time-' + props.message.id}
                 className={s.friendTime}>
                <span>{props.message.message.time}</span>
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
