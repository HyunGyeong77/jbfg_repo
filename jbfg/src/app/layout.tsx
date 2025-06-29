'use client';

import "styles/globals.css";
import {Header} from 'components/layout/Header';
import {HeaderModal} from 'components/common/modal/HeaderModal'; 
import {useEffect} from 'react';
import {scrollAtom} from 'lib/store/scroll';
import {useAtomValue} from 'jotai';

export default function RootLayout({children}:Readonly<{children: React.ReactNode;}>) {
  const scrollValue = useAtomValue(scrollAtom);

  useEffect(() => {
    if(scrollValue) return;

    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;
    let isTicking = false;
    const ease = 0.05;

    const scrollHandler = () => {
        if(!isTicking) {
            currentScroll = window.scrollY;
            targetScroll = window.scrollY;
        }
    }

    const wheelHandler = (e: WheelEvent) => {
        e.preventDefault();

        // 애니메이션
        const smoothScroll = () => {
            const delta = targetScroll - currentScroll;
            currentScroll += delta * ease;
        
            window.scrollTo(0, currentScroll);
        
            if (Math.abs(delta) > 0.5) {
                requestAnimationFrame(smoothScroll);
            } else {
                isTicking = false;
                currentScroll = targetScroll = window.scrollY;
            }
        }
        
        targetScroll += e.deltaY;
        targetScroll = Math.max(0, Math.min(document.body.scrollHeight - window.innerHeight, targetScroll));

        if (!isTicking) {
            isTicking = true;
            requestAnimationFrame(smoothScroll);
        }
    }
   
    window.addEventListener("wheel", wheelHandler, {passive: false});
    window.addEventListener("scroll", scrollHandler);

    return (() => {
        window.removeEventListener("wheel", wheelHandler);
        window.removeEventListener("scroll", scrollHandler);
    });
  }, [scrollValue]);

  return (
    <html lang="en">
      <body>
        <HeaderModal />
        <Header />
        {children}
      </body>
    </html>
  );
}
