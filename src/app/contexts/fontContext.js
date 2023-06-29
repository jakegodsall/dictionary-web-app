'use client';

import { createContext, useEffect, useState } from 'react';

export const FontContext = createContext();

export const FontProvider = ({ children }) => {
    const [font, setFont] = useState('sans');

    const rawSetFont = (font) => {
        const root = window.document.documentElement;

        root.classList.remove('sans');
        root.classList.remove('serif');
        root.classList.remove('mono');
        root.classList.add(font);
    };

    useEffect(() => {
        rawSetFont(font);
    }, [font]);

    return <FontContext.Provider value={{ font, setFont }}>{children}</FontContext.Provider>;
};
