'use client';

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/themeContext';

const Toggle = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    const toggleDarkMode = () => {
        setDarkMode((prevState) => !prevState);
    };

    return (
        <div>
            <input type='checkbox' checked={darkMode} onChange={(e) => toggleDarkMode(e)} />
        </div>
    );
};

export default Toggle;
