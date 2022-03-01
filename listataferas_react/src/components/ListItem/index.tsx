import * as C from './styles'
import { Item } from '../../types/Item'
import { useState } from 'react'

type Props = {
    item: Item
}

const DeleteItem = () => {
        
}

export const ListItem = ({item}: Props) => {
    const [isChecked, setIsChecked] = useState(item.done)

    return(
        <C.Container done={isChecked}>
            <input 
                type="checkbox"
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            >
            </input>
            <label>{item.name}</label>
        </C.Container>
    )
}