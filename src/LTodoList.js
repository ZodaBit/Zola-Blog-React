import { useEffect, useState } from "react";

import LoadSpiner from "./Spinner";
import ToDoItem from "./ToDoItem";

const LTodoList = () => {
  const [todo, setTodo] = useState([]);

  const [IsLoading, SetLoading] = useState(false);
  const GetToDoData = () => {
    SetLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setTodo(data);
        SetLoading(false);
      });
  };
  const UpdateState = (id) => {
    setTodo();
  };

  useEffect(() => {
    GetToDoData();
  }, []);

  const RenderTodo = (
    <div>
      {todo.map((item, i) => {
        return <ToDoItem ItemValue={item} key={i} />;
      })}
    </div>
  );

  return <div>{IsLoading ? <LoadSpiner /> : RenderTodo}</div>;
};

export default LTodoList;
