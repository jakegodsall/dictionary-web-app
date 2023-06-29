'use client';

import { createContext, useState } from 'react';

export const FontContext = createContext();

export const FontProvider = ({ children }) => {
    const [font, setFont] = useState('sans');

    return <FontContext.Provider value={{ font, setFont }}>{children}</FontContext.Provider>;
};
