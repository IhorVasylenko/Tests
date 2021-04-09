import React from 'react'
import style from './AlternativeAffairs.module.css'
import AlternativeAffair from "./AlternativeAffair";
import {AlternativeAffairType, AlternativeFilterType} from "./AlternativeHW2";
import RenderButtons from "./AlternativeButton";

type AlternativeAffairsPropsType = {
    data: AlternativeAffairType[]
    setFilter: (filter: AlternativeFilterType) => void
    deleteAffairCallback: (id: number) => void
}


function AlternativeAffairs (props: AlternativeAffairsPropsType) {
    const mappedAlternativeAffairs = props.data.map((a: AlternativeAffairType) => (
        <AlternativeAffair
            key = {a.id}
            affair = {a}
            deleteAffairCallback = {props.deleteAffairCallback}
        />
    ))

    return (
        <div className={style.container}>
            <div className={style.headerName}>
                to do list
            </div>
            <div className={style.affairsContainer}>
                {mappedAlternativeAffairs}
            </div>
            <RenderButtons setFilter={props.setFilter}/>
        </div>
    )
}

export default AlternativeAffairs
