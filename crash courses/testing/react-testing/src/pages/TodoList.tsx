import React, { Fragment } from 'react';

import { TodoInputForm, TodosContainer } from '../components';

const TodoList: React.FC = () => {
  return (
    <Fragment>
      <TodoInputForm />
      <TodosContainer />
    </Fragment>
  );
};

export default TodoList;
