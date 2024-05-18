import { FC } from 'react';
import { cn } from 'utils/libs';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
  task?: boolean;
}

export const Box: FC<BoxProps> = ({ children, className, task }) => {
  const defaultStyles = 'border rounded-md p-3 bg-slate-500';

  return <div className={cn(className, task && defaultStyles)}>{children}</div>;
};
