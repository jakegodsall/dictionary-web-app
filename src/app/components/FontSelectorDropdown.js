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
        <div className='absolute z-10 top-8 -left-8 p-6 w-[12rem] rounded-lg shadow-xl'>
            <ul>
                <li
                    onClick={onClickHandler}
                    className='text-[1.125rem] cursor-pointer font-bold hover:text-accent'
                >
                    Sans Serif
                </li>
                <li
                    onClick={onClickHandler}
                    className='text-[1.125rem] cursor-pointer font-bold hover:text-accent font-serif'
                >
                    Serif
                </li>
                <li
                    onClick={onClickHandler}
                    className='text-[1.125rem] cursor-pointer font-bold hover:text-accent font-mono'
                >
                    Mono
                </li>
            </ul>
        </div>
    );
};

export default FontSelectorDropdown;
