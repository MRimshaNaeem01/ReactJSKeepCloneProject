import React from 'react';

const ToDoList=(props)=>{
    
    return( 
        <> 
        <div className="todo_style"> 
        <i onClick={()=>{ 
            props.onSelect(props.id)
        } }
            
            className="fa fa-times" aria-hidden="true" />
        <li>{props.textt}</li>
    </div> 
    </>
    )}
export default ToDoList; 