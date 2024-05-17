import { useEffect, useState } from 'react';
import { Box } from './Box';
import { Button } from './Button';
import { TitleTask } from './TitleTask';

interface PostsProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const DataFetcher = () => {
  const [status, setStatus] = useState<boolean>(false);
  const [statusData, setStatusData] = useState<string>('Empty data');
  const [posts, setPosts] = useState<PostsProps[]>([]);

  const getPosts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      setPosts(data);
    } catch (error) {
      console.log('Something went wrong...', error);
    }
  };

  useEffect(() => {
    if (status) {
      setStatusData('Loading...');

      const interval = setTimeout(() => {
        getPosts();
      }, 2000);

      return () => clearTimeout(interval);
    }
  }, [status]);

  useEffect(() => {
    if (posts.length > 0) {
      setStatusData(`Get posts: ${posts.length}`);
    }
  }, [posts]);

  return (
    <Box className='flex flex-col items-start w-full bg-neutral-50'>
      <TitleTask
        title='Задача 3: Использование useEffect для загрузки данных'
        className='mb-3'
      />
      <Button onClick={() => setStatus(true)}>Get posts</Button>
      <span>{statusData}</span>
    </Box>
  );
};
