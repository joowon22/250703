import React, {useState} from "react";
import './App.css';
import TodoBase from "./components/TodoBase";
import InputBox from "./components/InputBox";

function App() {

  const [ inputValue, setInputValue ] = useState('')
  const [ todoList, setTodoList ] = useState([])
  
  const addItem = () => { //item 입력, 공백 검사
    const trimmedText = inputValue.trim();
    const textLength = inputValue.length;

    if (!trimmedText) {
      alert("Todo가 입력되지 않았습니다.")
      return
    }
    if (textLength < 5) {
      alert("최소 5자 이상부터 입력 가능합니다.")
      return
    }

    const todo = { //todo의 구조와 입력칸 초기화
      id: Date.now(),
      text: inputValue.trim(),
      checked: false
    };
    if (todo.text) {
      setTodoList([...todoList, todo]);
      setInputValue('');
    }
    // setTodoList([...todoList, inputValue])
  }

  const deletItem = (id) => { //item 삭제
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }
  
  const toggleChecked = (id) => { //체크박스 체크 검사
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo )
      )
  }

  //inputbox: 입력칸 TodoBase: todolist를 나타내는 Base
  return (
    <main>
      <h1>Todo List</h1>
      <hr className="line" />
      <div className="inputBox-App">
        <InputBox inputValue={inputValue} onInputChange={(e)=>setInputValue(e.target.value)}
      onAdd={addItem}/>
      </div>
      <div className="todoBase">
        <TodoBase todoList={todoList} onDelete={deletItem} onToggleChecked={toggleChecked}/>
      </div>
    </main>
  );
}

export default App;