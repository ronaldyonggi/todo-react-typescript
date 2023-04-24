import React from 'react';
import Header from './appComponents/Header';
import TodosLogic from './appComponents/TodosLogic';

function App() {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
}

export default App;
