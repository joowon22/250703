import React from "react";
import './TodoItem.css';

function TodoItem(props) {
  const { item, onDelete, onToggleChecked } = props;

  const handleDelete = () => {
    onDelete(item.id);
  };

  const handleToggle = () => {
    onToggleChecked(item.id);
  };

  return (
    <div className="todo-item">
        <div className="left"><input type="checkbox" checked={item.checked} onChange={handleToggle} />
        <span className={`text ${item.checked ? "checked" : ""}`}>{item.text}</span>
        </div>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}

export default TodoItem;