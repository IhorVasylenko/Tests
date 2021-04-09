import React from 'react'
import {AffairType} from "./HW2";
import style from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)
    const styleName = style.allName + ' ' + style[props.affair.priority]

    return (
        <div className={style.affairContainer}>
            <div className={styleName}>{props.affair.name}</div>
            <button  className={style.affairDeleteButton} onClick={deleteCallback}>x</button>
        </div>
    )
}

export default Affair
