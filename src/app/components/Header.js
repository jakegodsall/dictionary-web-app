import Image from 'next/image';

import Toggle from './Toggle';

import Logo from '../../../public/images/logo.svg';
import ArrowDown from '../../../public/images/icon-arrow-down.svg';
import Moon from '../../../public/images/icon-moon.svg';

const Header = () => {
    return (
        <header className='flex items-center justify-between'>
            <Image src={Logo} alt='logo' />
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-between'>
                    <p>Sans Serif</p>
                    <Image src={ArrowDown} alt='arrow down' />
                </div>
                <Toggle />
                <Image src={Moon} alt='moon' />
            </div>
        </header>
    );
};

export default Header;
