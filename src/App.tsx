import React from "react";
import ToDo from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import Layout from "antd/lib/layout/layout";

const App: React.FC = () => {
  const todos = [{ id: "tet", text: "todo1" }];

  const todoAddHandler = (text: string) => {
    console.log(text);
  };

  return (
    <Layout>
      <div className="App">
        <NewTodo onAddTodo={todoAddHandler} />
        <ToDo items={todos} />
      </div>
    </Layout>
  );
};
export default App;
