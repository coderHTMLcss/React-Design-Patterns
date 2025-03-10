import React from 'react';
import axios from 'axios';
import SingleTodoLoader from './shared/SingleTodoLoader';
import TodoList from './components/TodoList';
import ResourceLoader from './shared/ResourceLoader';
import CommentsList from './components/CommentsList';
import DataSource from './components/DataSource';

const getServerData = async (url: string) => {
  const responce = await axios.get(url);
  return responce.data
}

const App = () => {
  return (
    <div>
      <DataSource
        getDataFunc={() => getServerData(
          "https://jsonplaceholder.typicode.com/todos/1"
        )}
        resourceName="todo"
      >
        <TodoList />
      </DataSource>

      <br />

      <DataSource
        getDataFunc={() => getServerData(
          "https://jsonplaceholder.typicode.com/comments/1"
        )}
        resourceName="comments"
      >
        <CommentsList />
      </DataSource>
    </div>
  );
};

export default App;
