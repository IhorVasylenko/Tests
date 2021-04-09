import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    let activeFilterButton = true

    const setAll = () => {
        return props.setFilter('all')
        activeFilterButton = !activeFilterButton
    }
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')

    return (
        <div className={style.affairsContainer}>
            <div className={style.mappedAffairs}>{mappedAffairs}</div>
            <div className={style.buttonWrapper}>
                <button className={style.allButton} onClick={setAll} >All</button>
                <button className={`${style.highB} ${style.allButton}`} onClick={setHigh}>High</button>
                <button className={`${style.middleB} ${style.allButton}`} onClick={setMiddle}>Middle</button>
                <button className={`${style.lowB} ${style.allButton}`} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
