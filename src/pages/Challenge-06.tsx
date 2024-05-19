import { Box, ChallengeTask, Timer } from 'components/common';

export const Challenge_06 = () => {
  return (
    <Box task>
      <ChallengeTask
        className='mb-3'
        task={'Задача 6: Таймер'}
        description={
          'Создай компонент, который отображает таймер, отсчитывающий время с момента монтирования компонента.'
        }
      />
      <Timer />
    </Box>
  );
};
