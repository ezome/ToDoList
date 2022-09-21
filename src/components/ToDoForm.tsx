import React, { FC, useState } from 'react'
import store from '../store/store'

export const ToDoForm: FC = () => {
    const [value, setValue] = useState('')

    const send = () => {
        if (value.replace(/\s/g, '')) { 
            store.addTodo(value)
            setValue('')
        }
    }

    const handlePressInput = ({ code }: React.KeyboardEvent) => {
        if (code === 'Enter') send()
    }

    return (
        <>
            <input 
                className="content__input"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={handlePressInput}
            />
            <button className="content__btn" onClick={send}>+</button>
        </>
    )
}