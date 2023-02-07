import { RecoilRoot } from 'recoil';
import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GlobalStyles from '@styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <RecoilRoot>
        <Header />
        <Outlet />
        <Footer />
      </RecoilRoot>
    </>
  );
}

export default App;
