import { FC } from 'react'
import { ObservedToDoItem } from './ToDoListItem'
import { observer } from 'mobx-react-lite'
import store from '../store/store'

const ToDoList: FC = () => {
    return (
        <div className="todo-box">
            {store.todos.map((todo) => (
                <ObservedToDoItem id={todo.id} text={todo.text} done={todo.done} key={todo.id} />
            ))}
            {!store.todos.length && <h1>NO TODO</h1>}
        </div>
    )
}

export const ObservedToDoList = observer(ToDoList)