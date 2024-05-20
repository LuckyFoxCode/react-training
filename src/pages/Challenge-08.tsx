import { Box, Button } from 'components/common';
import { useState } from 'react';

export const Challenge_08 = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const isShowModal = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <Box
      task
      className='w-full max-w-[400px]'
    >
      <Button
        onClick={isShowModal}
        className='mb-3'
      >
        Show modal
      </Button>
      {isShow && (
        <Box className='py-4 border rounded-lg bg-slate-200'>
          <span className='flex justify-center text-2xl text-green-600'>
            It's me! Modal 👀
          </span>
        </Box>
      )}
    </Box>
  );
};
