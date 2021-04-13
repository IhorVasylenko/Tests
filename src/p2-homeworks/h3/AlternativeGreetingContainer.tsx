import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import AlternativeGreeting from './AlternativeGreeting'
import {UserType} from "./HW3";
import s from './AlternativeGreeting.module.css'

type AltGreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

// уровень локальной логики
const AlternativeGreetingContainer: React.FC<AltGreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [disable, setDisable] = useState<boolean>(false)
    const [inputClassName, setInputClass] = useState<string>(`${s.input} ${s.default}`)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value !== ' ') {
            setName(e.currentTarget.value)
            setError('')
            setDisable(false)
            setInputClass(`${s.input} ${s.default}`)
        } else {
            setError('Invalid name!')
            setName('')
            setDisable(true)
            setInputClass(`${s.input} ${s.error}`)
        }
    }
    const addUser = () => {
        if (name.length === 0) {
            setError('Input cannot be empty!')
            setName('')
            setDisable(true)
            setInputClass(`${s.input} ${s.error}`)
        } else {
            addUserCallback(name)
            alert(`Hello  !` + name)
            setName('')
            setInputClass(`${s.input} ${s.default}`)
        }

    }
    const pressAddUser = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            addUser()
        }
    }
    const onBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value === '') {
            setError('Please enter information!')
            setDisable(true)
            setInputClass(`${s.input} ${s.error}`)
        }
    }

    const totalUsers = users.length

    return (
        <AlternativeGreeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            pressAddUser={pressAddUser}
            disable={disable}
            inputClassName={inputClassName}
            onBlurHandler={onBlurHandler}
        />
    )
}

export default AlternativeGreetingContainer
