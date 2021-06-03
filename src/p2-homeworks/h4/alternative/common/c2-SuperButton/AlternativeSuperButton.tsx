import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './AlternativeSuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const AlternativeSuperButton: React.FC<SuperButtonPropsType> = (
    {
        red,
        className,
        ...restProps
    }
) => {
    const finalClassName = `${s.button} ${red ? s.red : s.default} ${className}`

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    )
}

export default AlternativeSuperButton
