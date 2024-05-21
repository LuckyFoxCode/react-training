import { Box, Button } from 'components/common';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'utils/consts';
import { cn } from 'utils/libs';

export const Aside = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <aside
      className={cn(
        isOpen ? 'min-w-[250px] shadow-xl shadow-pink-500 ' : 'w-fit',
        'fixed t-0 l-0 h-full flex flex-col p-2 bg-slate-400 transition-all',
      )}
    >
      <Box className='flex justify-between items-center mb-2'>
        {isOpen && (
          <h2 className='font-medium text-lg text-pink-600'>
            Complete chalenges:
          </h2>
        )}
        <Button
          onClick={handleIsOpen}
          className='py-1 px-2'
        >
          🍔
        </Button>
      </Box>
      <ul className='flex flex-col gap-y-3'>
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                cn(
                  'flex p-2 rounded-md text-slate-800 shadow-md transition-all focus:outline-none focus:shadow-yellow-200 hover:bg-slate-300 hover:text-slate-600',
                  isActive
                    ? 'bg-slate-100 text-slate-600'
                    : 'bg-slate-500 text-slate-200',
                )
              }
            >
              <span
                className={cn(
                  isOpen
                    ? 'w-fit justify-start mr-1'
                    : 'w-full justify-center mr-0',
                  'font-medium text-teal-500 inline-flex',
                )}
              >
                {route.id}
              </span>
              {isOpen && (
                <span>
                  {route.description.length > 26
                    ? `${route.description.slice(0, 24)}...`
                    : route.description}
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};
