import clsx from 'clsx';
import { FC } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}
export const Button: FC<ButtonProps> = ({
  children,
  className,
  type = 'button',
  ...rest
}) => {
  return (
    <button
      {...rest}
      type={type}
      className={clsx(
        className,
        'px-3 py-2 outline-none border rounded-md bg-slate-50 border-slate-200 text-slate-600 transition-colors hover:border-slate-400 focus:border-slate-300 focus:bg-slate-200 disabled:border-slate-50 disabled:text-slate-200',
      )}
    >
      {children}
    </button>
  );
};
