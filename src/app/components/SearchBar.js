import Image from 'next/image';

import SearchIcon from '../../../public/images/icon-search.svg';

const SearchBar = () => {
    return (
        <div className='w-full relative'>
            <input type='text' className='p-4 pl-6 rounded-2xl bg-[#F4F4F4] w-full ' />
            <button type='button'>
                <Image
                    src={SearchIcon}
                    alt='magnifying glass'
                    width='16px'
                    height='16px'
                    className='absolute right-4 top-4 w-[1.3rem] h-[1.3rem]'
                />
            </button>
        </div>
    );
};

export default SearchBar;
