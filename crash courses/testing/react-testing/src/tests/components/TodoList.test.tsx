import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { TodoList } from '../../pages';
import { Provider } from 'react-redux';
import store from '../../redux/Store';

describe('tests for TodoList', () => {
  configure({ adapter: new Adapter() });

  test('renders TodoList without crashing', () => {
    shallow(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  });

  test('renders TodoInputform within TodoList with correct placeholder', () => {
    const wrapper = mount(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    expect(wrapper.find('FormControl').prop('placeholder')).toEqual('Enter a todo');
  });

  test('renders TodosContainer within TodoList with correct placeholder', () => {
    const wrapper = mount(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    expect(wrapper.find('ListGroup')).toHaveLength(1);
  });

  test('adding a todo', () => {
    const wrapper = mount(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    wrapper.find('FormControl').simulate('change', { target: { value: 'special' } });
    wrapper.find('Button').simulate('click');

    const todoText = wrapper.find('.todo').text();
    expect(todoText).toEqual('special');
  });

  test('input field is empty when adding a todo', () => {
    const wrapper = mount(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    wrapper.find('FormControl').simulate('change', { target: { value: 'special' } });
    wrapper.find('Button').simulate('click');

    // testing input field is empty
    expect(wrapper.find('FormControl').prop('value')).toEqual('');
  });

  test('completing a todo', () => {
    const wrapper = mount(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    wrapper.find('FormControl').simulate('change', { target: { value: 'special' } });
    wrapper.find('Button').simulate('click');
    wrapper.find('p.todo').simulate('click');

    const props = wrapper.find('Todo').props().todo.isDone;

    expect(props).toBe(true);
  });

  test('deleting a todo', () => {
    const wrapper = mount(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    wrapper.find('FormControl').simulate('change', { target: { value: 'special' } });
    wrapper.find('Button').simulate('click');
    wrapper.find('FontAwesomeIcon').simulate('click');

    expect(wrapper.find('div.list-group').children()).toHaveLength(0);
  });
});
