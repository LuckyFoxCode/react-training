import { Box, ChallengeTask, Fieldset, Input } from 'components/common';
import { ChangeEvent, useState } from 'react';

export const Challenge_02 = () => {
  const [value, setValue] = useState<string>('');

  const getInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Box task>
      <ChallengeTask
        className='mb-2'
        task={'Задача 2: Управление состоянием формы'}
        description={
          'Создай компонент формы, который позволяет пользователю вводить текст и отображает его ниже формы в реальном времени.'
        }
      />
      <form className='mb-2'>
        <Fieldset legend='Legend'>
          <Input
            label='Text field'
            placeholder='Input value...'
            value={value}
            onChange={getInputValue}
          />
        </Fieldset>
      </form>
      <p className='flex items-end text-slate-300'>
        Data:{' '}
        <span className=' text-blue-400 ml-1'>
          {value.length > 0 ? value : 'Empty'}
        </span>
      </p>
    </Box>
  );
};
