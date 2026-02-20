import { useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const action = useNavigationType();

    // useLayoutEffect ensures scroll resets BEFORE the browser paints,
    // preventing visual blinks in the Navbar (title flash, background flash).
    useLayoutEffect(() => {
        if (action !== 'POP') {
            window.scrollTo(0, 0);
        }
    }, [action, pathname]);

    return null;
};

export default ScrollToTop;
