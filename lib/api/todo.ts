import todoAxios from '.';
import { TodoType } from '../../types/todo';

export const getTodosAPI = () => todoAxios.get<TodoType[]>('/api/todos');

export const checkTodoAPI = (id: number) => todoAxios.patch(`/api/todos/${id}`);

interface AddTodoAPIBody {
  text: string;
  color: TodoType['color'];
}

export const addTodoAPI = (body: AddTodoAPIBody) => todoAxios.post('/api/todos', body);

export const deleteTodoAPI = (id: number) => todoAxios.delete(`/api/todos/${id}`);
