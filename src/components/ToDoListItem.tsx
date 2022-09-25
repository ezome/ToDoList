import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import store from '../store/store'

interface IToDoItem {
    id: string
    text: string
    done: boolean
}

const ToDoItem: FC<IToDoItem> = ({id, text, done }) => {
    return (
        <div className="todo">
            <label>
                <input 
                    className="todo__input"
                    type="checkbox"
                    checked={ done }
                    onChange={() => store.completeTodo(id)}
                />
                <h2 className="todo__heading">{ text }</h2>
            </label>
            <button className="todo__btn" onClick={() => store.removeTodo(id)}>x</button>
        </div>
    )
}

export const ObservedToDoItem = observer(ToDoItem)