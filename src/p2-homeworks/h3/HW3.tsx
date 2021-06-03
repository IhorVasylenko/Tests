import React, {useState} from 'react'
import AlternativeGreetingContainer from './AlternativeGreetingContainer'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from './Greeting.module.css'

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        const user: UserType = {
            _id: v1(),
            name
        }
        setUsers([...users, user])
    }

    return (
        <div className={s.allWrapper}>
            <hr/>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <hr/>
            <AlternativeGreetingContainer users={users} addUserCallback={addUserCallback}/>
            <hr/>
        </div>
    )
}

export default HW3
