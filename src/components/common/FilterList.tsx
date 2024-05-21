import { useEffect, useState } from 'react';
import { tasks } from 'utils/consts';
import { RandomDataProps } from 'utils/types';
import { Box } from './Box';
import { Fieldset, Input } from './Input';

interface FilterItemProps {
  text: string;
}

const FilterItem = ({ text }: FilterItemProps) => {
  return (
    <li className='py-2 px-4 border rounded-md bg-purple-100 text-sm text-blue-500'>
      {text}
    </li>
  );
};

export const FilterList = () => {
  const [data, setData] = useState<RandomDataProps[]>(tasks);
  const [inputValue, setInputValue] = useState<string>('');

  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputValue.trim() === '') {
      setData(tasks);
    }

    const filteredData = tasks.filter((task) =>
      task.text.toLowerCase().includes(inputValue.toLowerCase()),
    );

    setData(filteredData);
  }, [inputValue]);

  return (
    <Box>
      <Fieldset
        legend='Filter list'
        className='mb-4'
      >
        <Input
          value={inputValue}
          placeholder='Enter a filter text'
          onChange={getInputValue}
        />
      </Fieldset>
      <ul className='flex flex-col gap-y-2'>
        {data.map(({ id, text }) => (
          <FilterItem
            key={id}
            text={text}
          />
        ))}
      </ul>
    </Box>
  );
};
