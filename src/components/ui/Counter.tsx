import { useState } from 'react';
import { Box } from './Box';
import { Button } from './Button';
import { TitleTask } from './TitleTask';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncreaseCounter = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecreaseCounter = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <Box className='w-full flex-wrap bg-neutral-100'>
      <TitleTask
        title='Задача 1: Счетчик'
        className='mb-2'
      />
      <Button
        disabled={count === 0}
        onClick={handleDecreaseCounter}
      >
        Decrease
      </Button>
      <span className='text-xl mx-2'>{count}</span>
      <Button onClick={handleIncreaseCounter}>Increase</Button>
    </Box>
  );
};
