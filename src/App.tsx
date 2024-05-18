import { Aside, Content, Header } from 'components/layout';
import { AppRouters } from 'utils/routers';

function App() {
  return (
    <>
      <Header />
      <main className='flex'>
        <Aside />
        <Content>
          <AppRouters />
        </Content>
      </main>
    </>
  );
}

export default App;
