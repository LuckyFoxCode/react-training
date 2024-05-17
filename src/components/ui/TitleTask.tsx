import clsx from 'clsx';
import { FC } from 'react';

interface TitleTaskProps {
  className?: string;
  title: string;
}

export const TitleTask: FC<TitleTaskProps> = ({ title, className }) => {
  return (
    <p
      className={clsx(
        'inline-flex w-full text-blue-300 font-semibold',
        className,
      )}
    >
      {title}
    </p>
  );
};
