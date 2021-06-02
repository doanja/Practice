import { addTodo, AppThunk, deleteTodo, getTodoList, updateTodo } from '../../redux/actions/todoActions';
import { TodoListActionTypes } from '../../redux/types/todoTypes';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test('getTodo', () => {
    const expectedActions = [
      {
        type: TodoListActionTypes.GET_TODO_LIST,
        payload: {
          todoList: [
            // { _id: '5d951182-8e67-4bd2-bcdf-66768e81194d', text: '1', isDone: false },
            // { _id: '6d951182-8e67-4bd2-bcdf-66768e81194e', text: '2', isDone: false },
            // { _id: '7d951182-8e67-4bd2-bcdf-66768e81194f', text: '3', isDone: false },
          ],
        },
      },
    ];
    const store = mockStore({ todoList: [], error: undefined });

    return store.dispatch<any>(getTodoList()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('addTodo', () => {
    const text = 'hello world';
    const expectedAction = [{ type: TodoListActionTypes.ADD_TODO, payload: { text } }];
    const store = mockStore({ todoList: [], error: undefined });

    return store.dispatch<any>(addTodo(text)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  test('updateTodo', () => {
    const expectedAction = [{ type: TodoListActionTypes.UPDATE_TODO, payload: { id: '5d951182-8e67-4bd2-bcdf-66768e81194b' } }];
    const store = mockStore({ todoList: [], error: undefined });

    return store.dispatch<any>(updateTodo('5d951182-8e67-4bd2-bcdf-66768e81194b')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  test('deleteTodo', () => {
    const expectedAction = [{ type: TodoListActionTypes.DELETE_TODO, payload: { id: '5d951182-8e67-4bd2-bcdf-66768e81194b' } }];
    const store = mockStore({ todoList: [], error: undefined });

    return store.dispatch<any>(deleteTodo('5d951182-8e67-4bd2-bcdf-66768e81194b')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
