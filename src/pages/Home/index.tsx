import { Header } from '../../components/Header';
import { Intro } from './components/Intro';
import { Store } from './components/Store';
import { HomeWrapper } from './styles';

export function Home() {
  return (
    <>
      <Header />

      <HomeWrapper>
        <Intro />
        <Store />
      </HomeWrapper>
    </>
  );
}
