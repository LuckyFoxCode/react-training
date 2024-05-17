import { useState } from 'react';
import { Box } from './Box';
import { TitleTask } from './TitleTask';

export const TextInput = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Box className='flex flex-col items-start w-full bg-neutral-50'>
      <TitleTask title='Задача 2: Управление состоянием формы' />
      <label
        htmlFor=''
        className='relative flex w-full pt-8 mb-2'
      >
        <input
          type='text'
          value={inputValue}
          onChange={getInputValue}
          className='peer w-full py-3 px-2 rounded-md border text-slate-600 outline-none shadow-md shadow-slate-100 transition-colors placeholder:text-slate-400 focus-within:border-blue-400 focus-within:shadow-blue-200'
        />
        <span className='flex absolute top-[45px] left-[9px] text-slate-400 transition-all peer-focus-within:top-2 peer-focus-within:left-0'>
          Edit field...
        </span>
      </label>
      <p className='w-full inline-flex text-slate-800 font-medium'>
        Input value:&nbsp;<span className='text-slate-500'> {inputValue}</span>
      </p>
    </Box>
  );
};
