import React from 'react'

export const List = (props) => {
    const {list, setList} = props

    const handleDelete = (idx) => {
        const newList = list.filter((item, index) => (index !== idx))
        setList(newList)
    }

    const todoComplete = {
        textDecoration: 'line-through'
    }

    const handleToggle = (idx) => { 
        const mutList = [...list]
        mutList[idx].complete = !mutList[idx].complete
        setList(mutList)
    }       

    return (
        <div>
            {
                list.map((item,idx) => (
                    <div>
                        <input type="checkbox" onClick={()=>{handleToggle(idx)}} checked={item.complete}></input>
                        <p style={ item.complete ? todoComplete : null }>{item.todo}</p>
                        <button onClick={ ()=> {handleDelete(idx)}}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}
