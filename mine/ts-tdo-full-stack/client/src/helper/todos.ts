import { TodoService } from '../services';

export default class TodoController {
  private api = new TodoService();

  public getTodos(setState: React.Dispatch<React.SetStateAction<Todo[]>>): void {
    this.api
      .getTodos()
      .then(res => setState(res.data.todos))
      .catch(err => console.log('err :>> ', err));
  }

  public deleteTodo(id: string, setState: React.Dispatch<React.SetStateAction<Todo[]>>): void {
    this.api
      .deleteTodo(id)
      .then(res => setState(res.data.todos))
      .catch(err => console.log('err', err));
  }

  public toggleTodo(id: string, done: boolean, setState: React.Dispatch<React.SetStateAction<Todo[]>>) {
    this.api
      .updateTodo(id, !done)
      .then(res => setState(res.data.todos))
      .catch(err => console.log('err', err));
  }

  public addTodo(text: string, setState: React.Dispatch<React.SetStateAction<Todo[]>>) {
    this.api
      .addTodo(text)
      .then(res => setState(res.data.todos))
      .catch(err => console.log('err', err));
  }
}
