import { Todo } from './data';

describe('Todo Interface', () => {
  it('should use to Todo Interface', () => {
    const todo: Todo = { title: 'Title' };
    expect(todo.title).toEqual('Title');
  });
});
