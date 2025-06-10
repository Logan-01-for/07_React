import { useState } from 'react';

function App() {

  const [todoList, setTodoList] = useState([
    { title: "React 개념정리", isComplete: false },
    { title: "도서관에 책 반납하기", isComplete: true }
  ]);

  const [inputTodo, setInputTodo] = useState("");

  const changeTodo = (e) => {
    setInputTodo(e.target.value);
  }

  const addTodo = () => {
    if (inputTodo.trim() === "") return; // 빈 입력 방지
    setTodoList([...todoList, { title: inputTodo, isComplete: false }]);
    setInputTodo(""); // 입력창 초기화
  }

  return (
    <div className="container">
      <table border={1}>
        <thead>
          <tr>
            <th>할 일 내용</th>
            <th>완료 여부</th>
          </tr>
        </thead>

        <tbody>
          {todoList.map((el, index) => (
            <tr key={index}>
              <td>{el.title}</td>
              <td>{el.isComplete ? "완료" : "미완료"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='inputDiv'>
        <input type='text' value={inputTodo} onChange={changeTodo} />
        <button onClick={addTodo}>할 일 등록</button>
      </div>
    </div>
  );
}

export default App;



[default.css]
* {
    box-sizing: border-box;
}

body {
    background-color: #f4f4f9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
  
.container {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 400px;
    text-align: center;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

thead {
    background-color: #4caf50;
    color: white;
}

th, td {
    padding: 10px;
    border: 1px solid #ddd;
}


.inputDiv {
    display: flex;
}

input[type="text"] {
    padding: 10px;
    width: 70%;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
}

button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

h1 {
    color: #4caf50;
    margin-bottom: 20px;
}
