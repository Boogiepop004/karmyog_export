import { useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const action = useNavigationType();

    // useLayoutEffect ensures scroll resets BEFORE the browser paints,
    // preventing visual blinks in the Navbar (title flash, background flash).
    // Always reset scroll on any route change — the POP skip was causing
    // a visible blink when using the back button on product pages.
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
