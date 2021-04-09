import React from 'react'
import style from './AlternativeAffairs.module.css'
import {AlternativeFilterType} from "./AlternativeHW2";

type PropsRenderButtonsType = {
    setFilter: (filter: AlternativeFilterType) => void
}

type PropsButtonType = {
    id: number
    name: AlternativeFilterType
}

function RenderButtons(props: PropsRenderButtonsType) {
    const [activeIndex, setActiveIndex] = React.useState(1)

    const handleOnClick = (index: number) => setActiveIndex(index)

    const set = (name: AlternativeFilterType) => props.setFilter(name)


    const buttons: PropsButtonType[] = [
        {id: 1, name: 'all'},
        {id: 2, name: 'high'},
        {id: 3, name: 'middle'},
        {id: 4, name: 'low'}
    ]

    const button = buttons.map((el) => {
        return (
            <button key={el.id} onClick={() => {
                handleOnClick(el.id)
                set(el.name)
            }} className={`${style.allPriorityButtons} ${activeIndex === el.id ? style.allPriorityButtonsActive : style.allPriorityButtonsInactive}`}
            >
                {el.name}
            </button>
        );
    });
    return <div className={style.priorityButtons}>{button}</div>;
}

export default RenderButtons
