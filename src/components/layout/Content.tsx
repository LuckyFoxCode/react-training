import { Box } from 'components/common';
import { FC } from 'react';
import { cn } from 'utils/libs';

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}
export const Content: FC<ContentProps> = ({ children, className }) => {
  return <Box className={cn(className)}>{children}</Box>;
};
