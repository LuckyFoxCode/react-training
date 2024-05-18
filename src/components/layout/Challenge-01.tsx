import { Box, Button, ChallengeTask } from 'components/common';
import { useState } from 'react';

export const Challenge_01 = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleDecreaseCount = () => {
    setCounter((prev) => prev - 1);
  };

  const handleIncreaseCount = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <Box
      task
      className='flex flex-col gap-y-2'
    >
      <ChallengeTask
        task={'Задача 1: Счетчик'}
        description={
          'Создай простой компонент-счетчик, который увеличивает значение при нажатии на кнопку.'
        }
      />
      <span className='flex text-base text-slate-200'>
        Count:{' '}
        <span className='font-semibold text-cyan-300 ml-1'>{counter}</span>
      </span>
      <Box className='flex gap-x-1'>
        <Button
          disabled={counter === 0}
          onClick={handleDecreaseCount}
        >
          Decrease
        </Button>
        <Button onClick={handleIncreaseCount}>Increase</Button>
      </Box>
    </Box>
  );
};
