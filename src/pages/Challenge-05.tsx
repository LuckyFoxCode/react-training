import { Box, ChallengeTask, CustomForm } from 'components/common';
import { useState } from 'react';

export interface UserDataProps {
  name: string;
  email: string;
}

export const Challenge_05 = () => {
  const [userData, setUserData] = useState<UserDataProps>({
    name: '',
    email: '',
  });

  return (
    <Box
      task
      className='w-full max-w-[300px]'
    >
      <ChallengeTask
        className='mb-3'
        task={'Задача 5: Управление состоянием нескольких инпутов'}
        description={
          'Создай форму с несколькими полями ввода и обрабатывай их значения.'
        }
      />
      <CustomForm setUserData={setUserData} />
      <Box className='flex flex-col text-sm text-teal-500'>
        <span>
          Name: <span className='text-amber-600'>{userData.name}</span>
        </span>
        <span>
          Email: <span className='text-amber-600'>{userData.email}</span>
        </span>
      </Box>
    </Box>
  );
};
