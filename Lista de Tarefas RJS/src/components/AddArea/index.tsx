import * as C from './styles'
import { useState, KeyboardEvent } from 'react'


type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea  = ({onEnter}: Props) => {
    const [inputText, setInputText] = useState('')

    const handleKeyUp = (e: KeyboardEvent) => {
        if((e.code === 'Enter' || e.code === 'NumpadEnter') && inputText !== ''){
            onEnter(inputText)
            setInputText('')
        }
    }

    const buttonClick = () => {
        onEnter(inputText)
        setInputText('')
    }

    return(
        <C.Container>
            <input type="text" placeholder='Adicionar Tarefa'
            value={inputText} onChange={e=>setInputText(e.target.value)} onKeyUp={handleKeyUp} maxLength={50}/>
            <button className='image' onClick={buttonClick}>➕</button>
        </C.Container>
    )
}