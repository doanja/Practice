import axios from 'axios';

export default class TodoService {
  public getTodos() {
    return axios.get<any>('/todo');
  }

  public addTodo(text: string) {
    return axios.post<any>('/todo', { text });
  }

  public updateTodo(id: number, text: string, done: boolean) {
    // TODO: check if text is undefined when not specified
    return axios.put<any>(`/todo/${id}`, { text, done });
  }

  public deleteTodo(id: number) {
    return axios.delete<any>(`/todo/${id}`);
  }
}
