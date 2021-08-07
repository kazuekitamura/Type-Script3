import axios from "axios";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState<any>([]);

  const onCliskFrtchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };
  return (
    <div className="App">
      <button onClick={onCliskFrtchData}>データ取得</button>
      {todos.map((todo) => (
        <p>{todo.title}</p>
      ))}
    </div>
  );
}
