'use client';

import { useState } from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import DefinitionSection from './components/DefinitionSection';

export default function Home() {
    const [input, setInput] = useState('hello');

    const searchInputHandler = (val) => {
        setInput(val);
    };

    return (
        <div className='w-screen h-screen bg-primary text-primary font-primary'>
            <Header />
            <main className='mx-6 flex flex-col items-center'>
                <SearchBar searchInput={searchInputHandler} />
                <DefinitionSection />
            </main>
        </div>
    );
}
