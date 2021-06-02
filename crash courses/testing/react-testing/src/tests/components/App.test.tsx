import App from '../../App';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { TodoList } from '../../pages';
import { Provider } from 'react-redux';
import store from '../../redux/Store';

describe('Tests for App', () => {
  configure({ adapter: new Adapter() });

  test('renders App without crashing', () => {
    shallow(<App />);
  });

  test('renders App h1 without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find('h1').text()).toEqual('TODOs');
  });

  test('renders TodoList inside App', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper.contains(<TodoList />)).toEqual(true);
  });
});
