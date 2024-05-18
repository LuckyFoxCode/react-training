import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='p-4 bg-slate-800'>
      <Link
        to='/'
        className='flex justify-center text-2xl text-slate-50 transition-colors hover:text-fuchsia-600'
      >
        LuckyFoxCode
      </Link>
    </header>
  );
};
