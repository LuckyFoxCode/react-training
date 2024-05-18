import { FC } from 'react';
import { cn } from 'utils/libs';

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  variant = 'primary',
  disabled,
  type = 'button',
  ...rest
}) => {
  const baseStyles =
    'py-2 px-4 border rounded-md transition-all focus:outline-none focus:border-blue-500';

  const variantStyles = {
    primary:
      'bg-slate-400 border-slate-200 text-slate-800 hover:text-slate-600',
    secondary: 'bg-transparent text-slate-300 hover:text-slate-400',
  };

  return (
    <button
      {...rest}
      type={type}
      disabled={disabled}
      className={cn(
        baseStyles,
        variantStyles[variant],
        'disabled:border-slate-600 disabled:text-slate-500',
        className,
      )}
    >
      {children}
    </button>
  );
};
