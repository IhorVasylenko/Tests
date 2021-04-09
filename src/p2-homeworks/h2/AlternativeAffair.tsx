import React, {useState} from 'react'
import style from "./AlternativeAffairs.module.css";
import {AlternativeAffairType} from "./AlternativeHW2";

export type AlternativeAffairPropsType = {
    affair: AlternativeAffairType
    deleteAffairCallback: (id: number) => void
}

function AlternativeAffair(props: AlternativeAffairPropsType) {const [checked, setChecked] = useState(false)
    const checkedHandler = () => {
        setChecked(!checked)
    }

    const deleteCallback = () => props.deleteAffairCallback(props.affair.id)

    const idString = props.affair.id.toString()

    return (
        <div className={`${style.affairWrapper}`}>
            <button onClick={deleteCallback} className={style.deleteButton}>x</button>
            <div className={`${style.affairName} ${checked ? style.affairNameInactive : style.affairNameActive} && ${ (props.affair.priority === 'high') ?
                style.affairWrapperHIgh : (props.affair.priority === 'middle') ?
                    style.affairWrapperMiddle : style.affairWrapperLow}`}>{props.affair.name}</div>
            <div>
                <input onClick={checkedHandler} className={style.chekButton} type="checkbox" id={idString}/>
                <label htmlFor={idString}/>
            </div>
        </div>
    )
}

export default AlternativeAffair
