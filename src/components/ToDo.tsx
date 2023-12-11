import React from "react";

interface TodoProps {
  items: { id: string; text: string }[];
}

const ToDo: React.FC<TodoProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};
export default ToDo;
