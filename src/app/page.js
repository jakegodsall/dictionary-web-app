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
        <div className='w-screen h-screen bg-primary text-primary font-primary'>
            <Header />
            <main className='mx-6 flex flex-col items-center'>
                <SearchBar forwardData={apiDataHandler} />
                <DefinitionSection data={apiData} />
            </main>
        </div>
    );
}
