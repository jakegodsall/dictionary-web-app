'use client';

import { createContext, useState, useEffect } from 'react';

const getColorThemeFromLocalStorage = () => {
    const value = localStorage.getItem('color-theme');
    // check the value exists and has the value 'dark'
    return typeof value === 'string' && value === 'dark';
};

const getColorThemeFromMediaQuery = () => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    return media.matches;
};

// get initial dark mode preference from user
const getColorThemePreference = () => {
    // set default darkMode to light
    let darkMode = false;
    // make sure that the script is run in the browser
    if (typeof window !== 'undefined') {
        // set darkMode to true if dark mode is in localStorage
        darkMode = getColorThemeFromLocalStorage();

        // set darkMode to true if dark mode is in media query
        darkMode = getColorThemeFromMediaQuery();
    }
    return darkMode;
};

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ initialDarkMode, children }) => {
    const [darkMode, setDarkMode] = useState(getColorThemePreference);

    const rawSetDarkMode = (darkMode) => {
        const root = window.document.documentElement;

        root.classList.remove(darkMode ? 'light' : 'dark');
        root.classList.add(darkMode ? 'dark' : 'light');

        localStorage.setItem('color-theme', darkMode ? 'dark' : 'light');
    };

    if (initialDarkMode) {
        rawSetDarkMode(initialDarkMode);
    }

    useEffect(() => {
        rawSetDarkMode(darkMode);
    }, [darkMode]);

    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
