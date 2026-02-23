import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, key } = useLocation();
    const action = useNavigationType();
    const currentKey = useRef(key);

    // Keep track of the current route key without triggering re-renders.
    // This ensures scroll events are always attributed to the correct page.
    currentKey.current = key;

    // Disable browser's native scroll restoration to prevent visual blinks
    // when navigating back (POP). Native restoration jumps the scroll position
    // immediately before React renders the old page.
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    useLayoutEffect(() => {
        if (action === 'POP') {
            // Restore manual scroll position from sessionStorage
            const savedPosition = sessionStorage.getItem(`scroll-${key}`);
            if (savedPosition) {
                window.scrollTo(0, parseInt(savedPosition, 10));
            } else {
                window.scrollTo(0, 0);
            }
        } else {
            // PUSH or REPLACE: scroll to top
            window.scrollTo(0, 0);
        }
    }, [action, pathname, key]);

    // Save scroll position continually
    useEffect(() => {
        let timeoutId = null;
        const handleScroll = () => {
            if (timeoutId) return;
            // Debounce/throttle to avoid overwhelming storage
            timeoutId = setTimeout(() => {
                sessionStorage.setItem(`scroll-${currentKey.current}`, window.scrollY.toString());
                timeoutId = null;
            }, 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []); // Empty dependency array: attach once, rely on currentKey ref

    return null;
};

export default ScrollToTop;
