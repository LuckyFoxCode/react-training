import { useEffect, useState } from 'react';
import { Box } from './Box';
import { Button } from './Button';

export const Timer = () => {
  const [count, setCount] = useState<number>(0);
  const [status, setStatus] = useState<boolean>(false);

  const handleStartTimer = () => setStatus(true);
  const handleStopTimer = () => setStatus(false);

  const handleResetTimer = () => {
    setStatus(false);
    setCount(0);
  };

  useEffect(() => {
    let timer: number;

    if (status) {
      timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [status]);

  return (
    <Box className='flex flex-col gap-y-2'>
      <span>
        Timer: <span className='text-pink-400'>{count}</span>
      </span>
      <Box className='flex gap-x-2'>
        <Button onClick={handleStartTimer}>Start</Button>
        <Button onClick={handleStopTimer}>Stop / Pause</Button>
        <Button onClick={handleResetTimer}>Reset</Button>
      </Box>
    </Box>
  );
};
