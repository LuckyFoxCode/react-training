import { ChangeEvent, FC } from 'react';
import { cn } from 'utils/libs';
import { Box } from './Box';

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: 'text';
  label?: string;
  className?: string;
  placeholder?: string;
}

interface FieldsetProps {
  children: React.ReactNode;
  legend: string;
  className?: string;
}

export const Input: FC<InputProps> = ({
  value,
  label,
  onChange,
  className,
  type = 'text',
  placeholder,
}) => {
  return (
    <Box className='flex flex-col'>
      {label && (
        <label className='text-sm mb-1 font-medium text-slate-300'>
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          className,
          'px-3 py-2 text-slate-700 border rounded-md border-slate-500 transition-all placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:shadow-md focus:shadow-blue-400',
        )}
      />
    </Box>
  );
};

export const Fieldset: FC<FieldsetProps> = ({
  children,
  legend,
  className,
}) => {
  return (
    <fieldset className={cn('border p-2 rounded', className)}>
      <legend className='px-2 text-sm font-medium text-gray-700'>
        {legend}
      </legend>
      {children}
    </fieldset>
  );
};
