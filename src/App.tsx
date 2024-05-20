import { Aside, Content, Header } from 'components/layout';
import { AppRouters } from 'utils/routers';

function App() {
  return (
    <>
      <Header />
      <main className='relative flex'>
        <Aside />
        <Content className='w-full flex justify-center pl-[60px] my-auto'>
          <AppRouters />
        </Content>
      </main>
    </>
  );
}

export default App;
