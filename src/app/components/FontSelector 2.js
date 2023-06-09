'use client';

import { useState, useContext, useEffect } from 'react';

import Image from 'next/image';

import { FontContext } from '../contexts/fontContext';

import ArrowDown from '../../../public/images/icon-arrow-down.svg';
import FontSelectorDropdown from './FontSelectorDropdown';

const FontSelector = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [fontText, setFontText] = useState('');

    const { font, setFont } = useContext(FontContext);

    const onClickHandler = () => {
        setShowDropdown((prevState) => !prevState);
    };

    let defaultFontValue = font;

    useEffect(() => {
        if (font === 'sans') {
            setFontText('Sans Serif');
        } else if (font === 'serif') {
            setFontText('Serif');
        } else {
            setFontText('Mono');
        }
    }, [font]);

    return (
        <div className='flex items-center justify-between gap-2 relative' onClick={onClickHandler}>
            <p className='text-right w-20'>{fontText}</p>
            <Image src={ArrowDown} alt='arrow down' className='cursor-pointer' />
            {showDropdown && <FontSelectorDropdown />}
        </div>
    );
};

export default FontSelector;
