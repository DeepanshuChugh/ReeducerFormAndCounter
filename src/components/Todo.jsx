import React, { useReducer, useState } from 'react'
import TodoList from './TodoList';


export const ACTIONS = {
ADD_TODO:'add-todo',
    deep:'completed'

}
const Reducer = (todos,action)=>{
    switch(action.type)
    {
        case ACTIONS.ADD_TODO:
            {
                //One Way
                // return [...todos,{todo:action.input,id:Date.now(),isCompleted:false}]

                //SecondWay
                return [newTodo(action.payload.input),...todos]
            }
        case 'submit':
            {
                return(
                    todos.map((el,ind) => {
                        if(el.id===action.payload.id)
                        {
                            return{...todos,isComplete:!el.isComplete}
                        }
                      return el;
                    })
                )
            
            }
        case 'delete':{
            return todos.filter(el=>
                el.id!==action.payload.id
            )
        }
            default:{
                return todos;
            }
        
    }
}


const newTodo = (input) =>{
    return {
        todo:input,
        id:Date.now(),
        isComplete:true
    }
}

const Todo = () => {
    const [todos,dispatch]=useReducer(Reducer,[])
    
    const [input,setInput]=useState('')



const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch({type:ACTIONS.ADD_TODO,payload:{input:input}})
        console.log(todos);
        setInput("")
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input  value={input} onChange={(e)=>setInput(e.target.value)} />
        </form>
        {
             todos.map((el,ind)=>{
                 return<TodoList key={ind} todos={el} dispatch={dispatch}/>
        })
    }
        
    </>
  )
}

export default Todo