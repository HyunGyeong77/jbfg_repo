import {Header, Section, Footer} from 'main/Index';
import {useEffect} from 'react';

export function Main() {

    useEffect(() => {
        let currentScroll = 0;
        let targetScroll = 0;
        let isTicking = false;
        const ease = 0.02;

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
    }, []);
    return (
        <main>
            <Header />
            <Section />
            <Footer />
        </main>
    );
}