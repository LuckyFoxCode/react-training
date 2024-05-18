import { Aside, Content, Header } from 'components/layout';
import { AppRouters } from 'utils/routers';

function App() {
  return (
    <>
      <Header />
      <main className='flex'>
        <Aside />
        <Content className='w-full flex justify-center items-center'>
          <AppRouters />
        </Content>
      </main>
    </>
  );
}

export default App;
