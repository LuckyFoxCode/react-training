import { FC } from 'react';
import { FakeUsersProps } from 'utils/types';

interface CustomListProps {
  users: FakeUsersProps[];
}

interface CustomItemProps {
  user: FakeUsersProps;
}

export const CustomList: FC<CustomListProps> = ({ users }) => {
  return (
    <ul className='flex flex-col gap-y-2'>
      {users.map((user) => (
        <CustomItem
          key={user.id}
          user={user}
        />
      ))}
    </ul>
  );
};

const CustomItem: FC<CustomItemProps> = ({ user }) => {
  return (
    <li className='flex gap-x-1 text-sm text-slate-900'>
      <span className='font-medium text-red-400'>{user.id}.</span>
      <span>{user.first_name}</span>
      <span>{user.last_name}</span>
    </li>
  );
};
