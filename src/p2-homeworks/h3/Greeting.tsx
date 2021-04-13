import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    pressAddUser: (e: KeyboardEvent<HTMLInputElement>) => void
    disable: boolean
    inputClassName: string
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, pressAddUser, error, totalUsers, disable, inputClassName}
) => {
    return (
        <div className={s.container}>
            <input placeholder={'Add new name...'} value={name} onChange={setNameCallback} onKeyPress={pressAddUser} className={inputClassName}/>
            <span className={s.errorName}>{error}</span>
            <button className={s.button} onClick={addUser} disabled={disable}>add</button>
            <span className={s.usersCount}>
                Counter is:<br />{totalUsers}
            </span>
        </div>
    )
}

export default Greeting
