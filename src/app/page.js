'use client';

import { useState } from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import DefinitionSection from './components/DefinitionSection/DefinitionSection';
import NotFound from './components/NotFound';

export default function Home() {
    const [apiData, setApiData] = useState('hello');
    const [isFound, setIsFound] = useState();

    const apiDataHandler = (val) => {
        if (val.hasOwnProperty('title') && val.title === 'No Definitions Found') {
            setIsFound(false);
        } else {
            setIsFound(true);
        }

        setApiData(val);
    };

    return (
        <div className='w-full h-full bg-primary text-primary font-primary sm:px-[4rem] md:max-w-[736px] mx-auto'>
            <Header />
            <main className='mx-6 flex flex-col items-center'>
                <SearchBar forwardData={apiDataHandler} />
                {isFound && <DefinitionSection data={apiData} />}
                {!isFound && <NotFound data={apiData} />}
            </main>
        </div>
    );
}
