'use client';

import { useContext } from 'react';
import { FontContext } from '../contexts/fontContext';

const FontSelectorDropdown = () => {
    const { font, setFont } = useContext(FontContext);

    const onClickHandler = (e) => {
        const map = {
            'Sans Serif': 'sans',
            Serif: 'serif',
            Mono: 'mono',
        };

        const val = e.target.innerHTML;

        setFont(map[val]);
    };

    return (
        <div className='absolute z-10 top-8 -left-8 p-[2.4rem] w-[12rem] rounded-lg shadow-xl bg-primary md:w-[16rem] md:top-[4rem] md:-left-[5rem] dark:shadow-[#A445ED] dark:bg-[#1f1f1f]'>
            <ul>
                <li
                    onClick={onClickHandler}
                    className='text-[1.4rem] cursor-pointer font-bold hover:text-accent sm:text-[1.8rem]'
                >
                    Sans Serif
                </li>
                <li
                    onClick={onClickHandler}
                    className='text-[1.4rem] cursor-pointer font-bold hover:text-accent font-serif sm:text-[1.8rem]'
                >
                    Serif
                </li>
                <li
                    onClick={onClickHandler}
                    className='text-[1.4rem] cursor-pointer font-bold hover:text-accent font-mono sm:text-[1.8rem]'
                >
                    Mono
                </li>
            </ul>
        </div>
    );
};

export default FontSelectorDropdown;
