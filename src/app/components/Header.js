import Image from 'next/image';

import Toggle from './Toggle';

import Logo from '../../../public/images/logo.svg';
import Moon from '../../../public/images/icon-moon.svg';
import FontSelector from './FontSelector';

const Header = () => {
    return (
        <header className='flex items-center justify-between p-6 mb-[2.4rem] sm:pt-[5.8rem] sm:pb-[5rem]'>
            <Image src={Logo} alt='logo' />
            <div className='flex items-center justify-between gap-[1.6rem] sm:gap-[2.6rem]'>
                <FontSelector />
                <div className='w-[1px] h-[2rem] bg-[#E9E9E9]'></div>
                <div className='flex items-center justify-between gap-4'>
                    <Toggle />
                    <Image src={Moon} alt='moon' className='h-[1.25rem] sm:h-[2rem] ' />
                </div>
            </div>
        </header>
    );
};

export default Header;
