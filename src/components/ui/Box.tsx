import clsx from 'clsx';
import { FC } from 'react';

interface BoxProps {
  className?: string;
  children: React.ReactNode;
}

export const Box: FC<BoxProps> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        'flex items-center px-2 py-4 border rounded-lg',
        className,
      )}
    >
      {children}
    </div>
  );
};
