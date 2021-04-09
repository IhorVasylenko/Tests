import React, {useState} from 'react'
import AlternativeAffairs from "./AlternativeAffairs";

// types
export type AlternativeAffairPriorityType = 'high' | 'middle' | 'low'
export type AlternativeAffairType = {
    name: string
    id: number
    checked: boolean
    priority: AlternativeAffairPriorityType
    activeClass: boolean
}
export type AlternativeFilterType = 'all' | AlternativeAffairPriorityType


// constants
const AlternativeDefaultAffairs: AlternativeAffairType[] = [
    {name: 'learn React', id: 1, checked: false, priority: 'high', activeClass: true},
    {name: 'learn English', id: 2, checked: false, priority: 'high', activeClass: true},
    {name: 'see Silicon Valley', id: 3, checked: false, priority: 'middle', activeClass: true},
    {name: 'learn JavaScript', id: 4, checked: false, priority: 'high', activeClass: true},
    {name: 'drink tea', id: 5, checked: false, priority: 'middle', activeClass: true},
    {name: 'turn off my computer and go to sleep', id: 6, checked: false, priority: 'low', activeClass: true}
]


// pure helper functions
export const AlternativeFilterAffairs = (affairs: AlternativeAffairType[], filter: AlternativeFilterType): AlternativeAffairType[] => {
    if (filter === 'all') return affairs
    return affairs.filter(a => a.priority === filter).concat(affairs.filter(a => a.priority !== filter))
}
export const AlternativeDeleteAffair = (affairs: AlternativeAffairType[], id: number): AlternativeAffairType[] => {
    return affairs.filter(a => a.id !== id)
}

function AlternativeHW() {
    const [affairs, setAffairs] = useState<AlternativeAffairType[]>(AlternativeDefaultAffairs)
    const [filter, setFilter] = useState<AlternativeFilterType>('all')

    const filteredAffairs = AlternativeFilterAffairs(affairs, filter)
    const deleteAffairCallback = (id: number) => setAffairs(AlternativeDeleteAffair(affairs, id))

    return (
            <AlternativeAffairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}/>
    )
}

export default AlternativeHW
