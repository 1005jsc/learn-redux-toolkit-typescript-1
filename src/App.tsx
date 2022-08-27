import React from 'react';
import './App.css';
import { TestComponent } from './components/TestComponent';
import CounterContainer from './containers/CounterContainer';
import PostListContainer from './containers/PostListContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div className='App'>
      {/* <TestComponent /> */}
      <CounterContainer />
      <TodosContainer />
      <PostListContainer />
    </div>
  );
}

export default App;
