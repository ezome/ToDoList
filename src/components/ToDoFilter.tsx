import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import store from '../store/store'

const ToDoFilter: FC = () => { 
    return (
        <p className="content__filter">
            <label>
                <input 
                    type="radio" 
                    name="filter" 
                    value="all"
                    checked={store.filterTodos === 'all'}
                    onChange={() => store.updateFilter('all')}
                /> 
                show all
            </label>
            <label>
                <input 
                    type="radio"
                    name="filter"
                    value="done"
                    checked={store.filterTodos === 'done'}
                    onChange={() => store.updateFilter('done')}
                /> 
                done
            </label>
            <label>
                <input 
                    type="radio" 
                    name="filter" 
                    value="noDone"
                    checked={store.filterTodos === 'noDone'}
                    onChange={() => store.updateFilter('noDone')}
                />
                no done
            </label>
        </p>
    )
}

export const ObservedToDoFilter = observer(ToDoFilter)