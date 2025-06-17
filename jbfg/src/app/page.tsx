import {Hero} from '@sections/Hero';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: "JB금융그룹",
  description: "JBFG 모작 사이트",
};

export default function Home() {
  
  return (
    <main>
      <Hero />
    </main>
  );
}
