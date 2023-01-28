import { RecoilRoot } from 'recoil';
import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import GlobalStyles from '@styles/globalStyles';

function App() {
  return (
    <RecoilRoot>
      <Header />
      <GlobalStyles />
      <Outlet />
    </RecoilRoot>
  );
}

export default App;
