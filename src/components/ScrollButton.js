import React, { useEffect, useRef } from 'react';

import { FaAnglesDown } from "react-icons/fa6";

const ScrollButton = () => {
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            buttonRef.current.style.opacity = window.scrollY > 120 ? 0 : 1;
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <span className="scroll btn flex" ref={buttonRef} onClick={() => window.scroll(0, 140)}><FaAnglesDown /></span>
    )
}

export default ScrollButton;