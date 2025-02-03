import React, { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";
const App = () => {
  const [list, setList] = useState([]);

  return (
    <div>
      <Input list={list} setList={setList} />
      <List list={list} setList={setList} />
    </div>
  );
};

export default App;
