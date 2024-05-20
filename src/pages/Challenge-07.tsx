import { Box, Button, ChallengeTask, Fieldset, Input } from 'components/common';
import { useState } from 'react';

interface TodosProps {
  id: string;
  task: string;
  isDone: boolean;
}

export const Challenge_07 = () => {
  const [todos, setTodos] = useState<TodosProps[]>([]);
  const [value, setValue] = useState<string>('');

  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const removeTodo = (id: string) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
  };

  const submitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), isDone: false, task: value },
    ]);

    setValue('');
  };

  return (
    <Box task>
      <ChallengeTask
        className='mb-2'
        task={'Задача 7: Список задач'}
        description={
          'Создай компонент, который позволяет добавлять и удалять задачи.'
        }
      />
      <form
        onSubmit={submitTodo}
        className='flex flex-col gap-y-2 mb-4'
      >
        <Fieldset legend='Notes'>
          <Input
            value={value}
            onChange={getInputValue}
            placeholder='Enter your note...'
          />
        </Fieldset>
        <Button
          type='submit'
          disabled={value.length === 0}
        >
          Add
        </Button>
      </form>
      {todos.length < 1 ? (
        <p className='font-medium text-2xl text-violet-800 text-center'>
          Ooooops! Empty notes 🫣
        </p>
      ) : (
        <ul className='flex flex-col gap-y-2'>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className='flex items-center p-2 rounded-md bg-slate-200 text-zinc-600'
            >
              <span className='flex flex-1 mr-2'>{todo.task}</span>

              <Button
                className='px-2 py-1 bg-transparent border-slate-500'
                onClick={() => removeTodo(todo.id)}
              >
                🗑️
              </Button>
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
};
