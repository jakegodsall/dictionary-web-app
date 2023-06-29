'use client';

import Image from 'next/image';

import SearchIcon from '../../../public/images/icon-search.svg';

const SearchBar = ({ searchInput }) => {
    const onSubmitHandler = (e) => {
        e.preventDefault();

        searchInput(e.target.word.value);
    };

    return (
        <form className='w-full relative' onSubmit={onSubmitHandler}>
            <input type='text' name='word' className='p-4 pl-6 rounded-2xl bg-[#F4F4F4] w-full ' />
            <button type='submit'>
                <Image
                    src={SearchIcon}
                    alt='magnifying glass'
                    width='16px'
                    height='16px'
                    className='absolute right-4 top-4 w-[1.3rem] h-[1.3rem]'
                />
            </button>
        </form>
    );
};

export default SearchBar;
