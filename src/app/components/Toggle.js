'use client';

import { useContext } from 'react';

import { DarkModeContext } from '../contexts/themeContext';

const Toggle = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    const toggleDarkMode = () => {
        setDarkMode((prevState) => !prevState);
    };

    var toggleBaseClass =
        "cursor-pointer appearance-none before:content-[''] before:w-[40px] before:h-[21px] before:bg-[#757575] before:absolute before:left-0 before:top-0 before:bottom-0 before:rounded-full dark:before:bg-[#a445ed] after:content-[''] after:w-[15px] after:h-[15px] after:rounded-full after:bg-white after:absolute after:top-[3px] after:left-[3px] after:transition-transform after:ease-in-out after:duration-500 dark:after:left-auto dark:after:transform dark:after:translate-x-[1.35rem] dark:after:transition-transform dark:after:ease-in-out dark:after:duration-500";

    return (
        <div className='relative w-[40px] h-[21px]'>
            <input
                className={toggleBaseClass}
                type='checkbox'
                checked={darkMode}
                onChange={(e) => toggleDarkMode(e)}
            />
        </div>
    );
};

export default Toggle;
