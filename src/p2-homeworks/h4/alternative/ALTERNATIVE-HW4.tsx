import React, {ChangeEvent, useState} from 'react'
import AlternativeSuperInputText from './common/c1-SuperInputText/AlternativeSuperInputText'
import s from './ALTERNATIVE-HW4.module.css'
import AlternativeSuperButton from './common/c2-SuperButton/AlternativeSuperButton'
import AlternativeSuperCheckbox from './common/c3-SuperCheckbox/AlternativeSuperCheckbox'

function AlternativeHomeWorks() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div className={s.column}>
            <AlternativeSuperInputText
                value={text}
                onChangeText={setText}
                onEnter={showAlert}
                error={error}
                // spanClassName={s.testSpanError}
            />
            <AlternativeSuperInputText className={s.blue} />
            <AlternativeSuperButton>
                default
            </AlternativeSuperButton>
            <AlternativeSuperButton red onClick={showAlert}>
                delete {/*// название кнопки попадёт в children*/}
            </AlternativeSuperButton>
            <AlternativeSuperButton disabled>
                disabled
            </AlternativeSuperButton>
            <AlternativeSuperCheckbox checked={checked} onChangeChecked={setChecked} onChange={() => {}} type={"checkbox"}  />
                some text {/*// этот текст попадёт в children*/}

            <AlternativeSuperCheckbox checked={checked} onChange={testOnChange}/>
        </div>
    )
}

export default AlternativeHomeWorks
