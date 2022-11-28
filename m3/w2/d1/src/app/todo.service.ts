
import { Todo } from './models/todo.interface';

export async function getTodos(): Promise<Todo[]> {
  return await (await fetch('assets/todo.json')).json()

}
