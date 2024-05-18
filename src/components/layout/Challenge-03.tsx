import { Box, Button, ChallengeTask } from 'components/common';
import { useEffect, useState } from 'react';
import { FakePostProps } from 'utils/types';

export const Challenge_03 = () => {
  const [status, setStatus] = useState<boolean>(false);
  const [posts, setPosts] = useState<FakePostProps[]>([]);
  const [statusData, setStatusData] = useState<string>('Empty data');

  const API_URL = 'https://jsonplaceholder.typicode.com/posts';

  const getPostsData = () => setStatus(true);

  const getFakePosts = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();

    setPosts(data);
  };

  // Отслеживание изменения стейта статуса и отправка запроса на получение постов
  useEffect(() => {
    if (status) {
      setStatusData('Loading...');

      const timer = setTimeout(() => {
        getFakePosts();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  // Отслеживание изменения стейта постов и отрисовка состояний загрузки.
  useEffect(() => {
    if (posts.length > 0) {
      setStatusData(`Get posts: ${posts.length}`);
    }
  }, [posts]);

  return (
    <Box task>
      <ChallengeTask
        className='mb-4'
        task={'Задача 3: Использование useEffect для загрузки данных'}
        description={
          'Создай компонент, который загружает данные с API и отображает их.'
        }
      />
      <Box className='flex flex-col'>
        <Button
          className='w-fit mb-2'
          onClick={getPostsData}
        >
          Get data
        </Button>
        <span className='text-lg text-blue-700'>{statusData}</span>
      </Box>
    </Box>
  );
};
