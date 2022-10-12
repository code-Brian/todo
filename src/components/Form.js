import React from 'react'
import {useState} from 'react'
import { List } from './List'

export const Form = (props) => {
    const {list, setList} = props
    const [todo, setTodo] = useState({})

    const handleChange = (e) => {
        setTodo({todo: e.target.value, complete: false})
    }

    const handleSubmit = (e) => {
        console.log('submit has been submitted')
        e.preventDefault()
        setList([...list, todo])
        setTodo({todo:""})
    }

    return (
        <div>Form
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Todo Item:</label>
                    <input onChange={handleChange} type="text" value={todo.todo}></input>
                </div>
                <input type="submit" value="Create Todo"></input>
            </form>
        </div>
    )
}
