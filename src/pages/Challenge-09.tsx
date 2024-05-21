import { Box, ChallengeTask, FilterList } from 'components/common';

export const Challenge_09 = () => {
  return (
    <Box task>
      <span>09</span>
      <ChallengeTask
        className='mb-3'
        task={'Задача 9: Фильтрация списка'}
        description={
          'Создай компонент, который позволяет фильтровать список элементов по введенному тексту.'
        }
      />
      <FilterList />
    </Box>
  );
};
