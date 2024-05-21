import {
  Box,
  Button,
  ChallengeTask,
  Fieldset,
  Input,
  UserDetail,
} from 'components/common';
import { useEffect, useState } from 'react';
import { UserDetails } from 'utils/types';

const initialState: UserDetails = {
  id: 1,
  name: '',
  username: '',
  email: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
      lat: '',
      lng: '',
    },
  },
  phone: '',
  website: '',
  company: {
    name: '',
    catchPhrase: '',
    bs: '',
  },
};

export const Challenge_10 = () => {
  const [userId, setUserId] = useState<string>('');
  const [status, setStatus] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserDetails>(initialState);
  const [inputValue, setInputValue] = useState<string>('');
  const [statusText, setStatusText] = useState<string>(
    'Please, enter your id 🫶',
  );

  const API_URL = 'https://jsonplaceholder.typicode.com/users/';

  const getUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submitUserId = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(`User ID: ${inputValue}`);
    setUserId(inputValue);
    setInputValue('');
    setStatus(false);
    setStatusText('Loading...');
  };

  const getUserData = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}${id}`);
      if (!response.ok) {
        throw new Error('Ooooops, wrong your id or Error fetching data');
      }

      const data = await response.json();
      setStatus(true);
      console.log(data);
      setUserData(data);
    } catch (error) {
      setStatus(false);
      setStatusText(`🚨 Ooooops, error retrieving data for your ID: ${id}`);
    }
  };

  useEffect(() => {
    if (userId === '') {
      return;
    }

    getUserData(userId);
  }, [userId]);

  return (
    <Box
      task
      className='flex flex-col gap-y-3'
    >
      <ChallengeTask
        task={'Задача 10: Получение данных при изменении пропсов'}
        description={
          'Создай компонент, который загружает данные с API при изменении пропсов.'
        }
      />
      <form
        onSubmit={submitUserId}
        className='flex flex-col gap-y-2'
      >
        <Fieldset legend='User ID'>
          <Input
            value={inputValue}
            placeholder='Enter your ID from 1 to 10'
            onChange={getUserId}
          />
        </Fieldset>
        <Button
          type='submit'
          disabled={inputValue.trim().length === 0}
        >
          Get details
        </Button>
      </form>
      {status ? (
        <UserDetail userData={userData} />
      ) : (
        <p className='text-center text-lg text-pink-300'>{statusText}</p>
      )}
    </Box>
  );
};
