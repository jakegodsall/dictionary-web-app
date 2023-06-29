'use client';

import { createContext, useEffect, useState } from 'react';

// get font preference from localStorage
const getFontPreference = () => {
    // make sure that the script is run in the browser
    if (typeof window !== 'undefined') {
        const font = localStorage.getItem('font');

        if (typeof font === 'string') {
            return font;
        }
    }

    return 'sans';
};

export const FontContext = createContext();

export const FontProvider = ({ children }) => {
    const [font, setFont] = useState(getFontPreference);

    const rawSetFont = (font) => {
        const root = window.document.documentElement;

        root.classList.remove('sans');
        root.classList.remove('serif');
        root.classList.remove('mono');
        root.classList.add(font);
    };

    localStorage.setItem('font', font);

    useEffect(() => {
        rawSetFont(font);
    }, [font]);

    return <FontContext.Provider value={{ font, setFont }}>{children}</FontContext.Provider>;
};
