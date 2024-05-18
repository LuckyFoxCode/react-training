import { FC } from 'react';
import { cn } from 'utils/libs';
import { Box } from './Box';

interface ChallengeTaskProps {
  task: string;
  className?: string;
  description: string;
}

export const ChallengeTask: FC<ChallengeTaskProps> = ({
  task,
  className,
  description,
}) => {
  return (
    <Box className={cn('border-b border-pink-200 pb-2', className)}>
      <h2 className='text-base font-medium mb-2'>{task}</h2>
      <p className='text-sm text-blue-300'>{description}</p>
    </Box>
  );
};
