import { Box, Counter, DataFetcher, TextInput } from './components/ui';

function App() {
  return (
    <Box className='w-full flex-col gap-y-4'>
      <h1 className='text-neutral-50'>My application</h1>
      <Counter />
      <TextInput />
      <DataFetcher />
    </Box>
  );
}

export default App;
