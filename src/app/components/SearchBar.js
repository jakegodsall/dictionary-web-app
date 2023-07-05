'use client';

import Image from 'next/image';
import SearchIcon from '../../../public/images/icon-search.svg';

const fetchData = async (input) => {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(response.status + ': Word Not Found');
        }
    } catch (error) {
        console.error(error);
        return -1;
    }
};

const SearchBar = ({ forwardData }) => {
    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const input = e.target.word.value;

        const data = await fetchData(input);

        forwardData(data);
    };

    return (
        <form className='w-full relative' onSubmit={onSubmitHandler}>
            <input
                type='text'
                name='word'
                className='outline-none p-[1.6rem] pl-[2.4rem] text-[1.6rem] rounded-2xl bg-[#F4F4F4] w-full sm:p-[2.2rem] sm:text-[2rem] focus:outline-[#A445ED]  focus:outline-[1px] dark:bg-[#1F1F1F]'
            />
            <button type='submit'>
                <Image
                    src={SearchIcon}
                    alt='magnifying glass'
                    width='16px'
                    height='16px'
                    className='absolute right-[2.45rem] top-[1.8rem] w-[2rem] h-[2rem] sm:top-[2.5rem]'
                />
            </button>
        </form>
    );
};

export default SearchBar;
