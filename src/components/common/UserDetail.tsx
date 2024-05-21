import { UserDetails } from 'utils/types';
import { Box } from './Box';

interface UserDetailProps {
  userData: UserDetails;
}

export const UserDetail = ({ userData }: UserDetailProps) => {
  const { id, name, email, phone, address, website, company } = userData;

  return (
    <Box className='flex flex-col px-2 py-3 first:gap-y-4 gap-y-3 bg-slate-700 border border-slate-300 rounded-md'>
      <h2 className='text-xl text-white'>User: {id}</h2>
      <Box className='flex flex-col text-slate-500'>
        <span className=''>Name: {name}</span>
        <span>Email: {email}</span>
        <span>Phone: {phone} </span>
      </Box>
      <Box className='text-slate-600'>
        <p>
          Adress: {address.city}, {address.street}, {address.suite}{' '}
        </p>
        <span>WebSite: {website} </span>
      </Box>
      <Box className='flex flex-col text-slate-800'>
        <span>Company: </span>
        <span>Name: {company.name} </span>
        <span>Description: {company.catchPhrase} </span>
      </Box>
    </Box>
  );
};
