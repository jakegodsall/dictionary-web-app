'use client';

import { useState } from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import DefinitionSection from './components/DefinitionSection/DefinitionSection';

export default function Home() {
    const [apiData, setApiData] = useState('hello');

    const apiDataHandler = (val) => {
        setApiData(val);
    };

    return (
        <div className='w-full h-full bg-primary text-primary font-primary sm:px-[4rem] md:max-w-[736px] mx-auto'>
            <Header />
            <main className='mx-6 flex flex-col items-center'>
                <SearchBar forwardData={apiDataHandler} />
                <DefinitionSection data={apiData} />
            </main>
        </div>
    );
}
