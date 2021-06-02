import { Container } from 'react-bootstrap';
import { TodoList } from './pages';

function App() {
  return (
    <Container fluid data-testid='app-container'>
      <h1>TODOs</h1>
      <TodoList />
    </Container>
  );
}

export default App;
