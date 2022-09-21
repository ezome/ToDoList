import { FC } from 'react'
import { ToDoForm } from './ToDoForm'
import { ObservedToDoList } from './ToDoList'
import { ObservedToDoFilter } from './ToDoFilter'

export const ToDo: FC = () => {
    return (
        <section className="content">
            <ToDoForm />
            <ObservedToDoFilter />
            <ObservedToDoList />
        </section>
    )
}