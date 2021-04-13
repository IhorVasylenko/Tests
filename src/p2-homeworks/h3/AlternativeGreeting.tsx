import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './AlternativeGreeting.module.css'

type AltGreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    pressAddUser: (e: KeyboardEvent<HTMLInputElement>) => void
    disable: boolean
    inputClassName: string
    onBlurHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const AlternativeGreeting: React.FC<AltGreetingPropsType> = (
    {name, setNameCallback, addUser, pressAddUser, error, totalUsers, disable, inputClassName, onBlurHandler}
) => {
    return (
        <div className={s.container}>
            <input
                placeholder={'Add new name...'}
                value={name} onChange={setNameCallback}
                   onKeyPress={pressAddUser}
                className={inputClassName}
                onBlur={onBlurHandler}
            />
            <span className={s.errorName}>{error}</span>
            <button className={s.button} onClick={addUser} disabled={disable}>add</button>
            <span className={s.usersCount}>
                Counter is:<br />{totalUsers}
            </span>
        </div>
    )
}

export default AlternativeGreeting
