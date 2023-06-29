import Image from 'next/image';

import Toggle from './Toggle';

import Logo from '../../../public/images/logo.svg';
import Moon from '../../../public/images/icon-moon.svg';
import FontSelector from './FontSelector';

const Header = () => {
    return (
        <header className='flex items-center justify-between p-6'>
            <Image src={Logo} alt='logo' />
            <div className='flex items-center justify-between gap-4'>
                <FontSelector />
                <div className='flex items-center justify-between gap-4'>
                    <Toggle />
                    <Image src={Moon} alt='moon' className='h-[1.25rem]' />
                </div>
            </div>
        </header>
    );
};

export default Header;
