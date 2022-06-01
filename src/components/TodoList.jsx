import React from 'react'
// import { ACTIONS } from './Todo'

const TodoList = ({todos,dispatch}) => {
  return (
           <>
           <div>
               <span style={{color:todos.isComplete?'red':'green'}}>
                  {todos.todo}  
               </span>
           <button onClick={()=>dispatch({type:'submit', payload:{id:todos.id}})}>complete</button>
           <button onClick={()=>dispatch({type:'delete', payload:{id:todos.id}})}>Delete</button>
           {/* <button>delete</button> */}
           </div>

           </>
       )

}

export default TodoList