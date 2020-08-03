import axios from 'axios';

export default class TodoService {
  public getTodos() {
    return axios.get<any>('/todo');
  }

  public addTodo(text: string) {
    return axios.post<any>('/todo', { text });
  }

  public updateTodo(id: string, done: boolean) {
    return axios.put<any>(`/todo/${id}`, { done });
  }

  public deleteTodo(id: string) {
    return axios.delete<any>(`/todo/${id}`);
  }
}
