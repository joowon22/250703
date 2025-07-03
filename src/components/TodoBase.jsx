import React from "react";
import TodoItem from "./TodoItem";
import "./TodoItem.css";

function TodoBase(props) {

    const { todoList, onDelete, onToggleChecked } = props;
    //props: App에 있는 TodoList를 받아옴
    
    return (
        <div>
            {todoList.length === 0 ? (<p style={{color:"gray", fontStyle:"italic"}}>할 일이 없습니다</p>) : 
            (todoList.map((item)=>
                <TodoItem item={item} 
                key={item.id} 
                onDelete={onDelete} 
                onToggleChecked={onToggleChecked}/>))}
        </div>
    )
}

export default TodoBase;