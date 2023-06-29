'use client';

import { useState, useContext } from 'react';

import Image from 'next/image';

import { FontContext } from '../contexts/fontContext';

import ArrowDown from '../../../public/images/icon-arrow-down.svg';
import FontSelectorDropdown from './FontSelectorDropdown';

const FontSelector = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const { font, setFont } = useContext(FontContext);

    const onClickHandler = () => {
        setShowDropdown((prevState) => !prevState);
    };

    return (
        <div className='flex items-center justify-between gap-2 relative' onClick={onClickHandler}>
            <p className='text-right w-20'>{font}</p>
            <Image src={ArrowDown} alt='arrow down' className='cursor-pointer' />
            {showDropdown && <FontSelectorDropdown />}
        </div>
    );
};

export default FontSelector;
