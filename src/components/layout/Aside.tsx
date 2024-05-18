import { NavLink } from 'react-router-dom';
import { routes } from 'utils/consts';
import { cn } from 'utils/libs';

export const Aside = () => {
  return (
    <aside className='flex flex-col min-w-[250px] h-[100vh] p-2 bg-slate-400 mr-2'>
      <h2 className='font-medium text-lg text-pink-600 mb-2'>
        Complete chalenges:
      </h2>
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
              {route.description}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};
