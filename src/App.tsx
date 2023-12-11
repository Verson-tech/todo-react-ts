import React from "react";
import ToDo from "./components/ToDo";
import NewTodo from "./components/NewTodo";
import Layout from "antd/lib/layout/layout";

const App: React.FC = () => {
  let todos = [{ id: "tet", text: "todo1" }];
  return (
    <Layout>
      <div className="App">
        <NewTodo />
        <ToDo items={todos} />
      </div>
    </Layout>
  );
};
export default App;
