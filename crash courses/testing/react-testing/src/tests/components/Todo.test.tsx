import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Todo } from '../../components';
import { Provider } from 'react-redux';
import store from '../../redux/Store';

describe('Tests for Todo', () => {
  configure({ adapter: new Adapter() });
  const todo: Todo = { text: 'hello world', isDone: false, _id: '012380967868' };

  test('renders Todo without crashing', () => {
    shallow(
      <Provider store={store}>
        <Todo todo={todo} />
      </Provider>
    );
  });

  test('checks Todo text', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Todo todo={todo} />
      </Provider>
    );

    const todoText = wrapper.find('p').text();
    expect(todoText).toEqual('hello world');
  });

  test('checks Todo components todo prop', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Todo todo={todo} />
      </Provider>
    );

    const props = wrapper.props().children.props.todo;

    expect(props.text).toBe('hello world');
    expect(props._id).toBe('012380967868');
    expect(props.isDone).toBe(false);
  });
});
