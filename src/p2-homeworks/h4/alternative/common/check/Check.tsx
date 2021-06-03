import React from 'react'
import s from './Check.module.css'


const Check = () => {
    return (
        <div className={s.center}>
            <label>
                <input className={s.labelCheckbox} type="checkbox"/>
                <span className={s.labelText}>
                    <span className={s.labelCheck}>
                        <i className={s.icon}></i>
                    </span>
                </span>
            </label>
        </div>
    )
}

export default Check
