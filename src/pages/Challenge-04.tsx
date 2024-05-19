import { Box, ChallengeTask, CustomList } from 'components/common';
import { fakeUsers } from 'utils/consts';

export const Challenge_04 = () => {
  return (
    <Box task>
      <ChallengeTask
        task={'Задача 4: Компонент списка с пропсами'}
        description={
          'Создай компонент, который принимает список элементов через пропсы и отображает их.'
        }
        className='mb-3'
      />
      <CustomList users={fakeUsers} />
    </Box>
  );
};
