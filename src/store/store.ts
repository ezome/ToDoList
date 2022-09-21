import { makeAutoObservable } from 'mobx'
import { nanoid } from 'nanoid'

class Todos {
    fullTodos = [
        { id: nanoid(), text: 'Finish this mission', done: true },
        { id: nanoid(), text: 'Get a job', done: false }
    ]

    filterTodos = 'all'

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(text: string) {
        this.fullTodos.push({
            id: nanoid(),
            text: text,
            done: false
        })
    }

    removeTodo(id: string) {
        this.fullTodos = this.fullTodos.filter(todo => todo.id !== id)
    }

    completeTodo(id: string) {
        this.fullTodos.map(todo => (todo.id === id ? todo.done = !todo.done : todo))
    }

    updateFilter(value: 'all' | 'done' | 'noDone') {
        this.filterTodos = value
    }

    get todos() {
        return (this.filterTodos === 'all') ? this.fullTodos :
        (this.filterTodos === 'done') ? this.fullTodos.filter(todo => todo.done) :
        this.fullTodos.filter(todo => !todo.done)
    }
}

const store = new Todos()
export default store