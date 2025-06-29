import Hero from '@sections/Hero';
import Esg from '@sections/Esg';
import Family from '@sections/Family';
import Global from '@sections/Global';
import News from '@sections/News';
import Notice from '@sections/Notice';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: "JB금융그룹",
  description: "JBFG 모작 사이트",
};

export default function Home() {
  
  return (
    <main id="main">
      <Hero />
      <Esg />
      <Family />
      <Global />
      <News />
      <Notice />
    </main>
  );
}
