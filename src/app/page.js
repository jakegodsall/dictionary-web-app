'use client';

import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import DefinitionSection from './components/DefinitionSection/DefinitionSection';
import NotFound from './components/NotFound';

export default function Home() {
    const [apiData, setApiData] = useState('hello');
    const [isInitial, setIsInitial] = useState(true);
    const [isFound, setIsFound] = useState();

    const apiDataHandler = (val) => {
        setIsInitial(false);

        if (val === -1) {
            setIsFound(false);
        } else {
            setIsFound(true);
        }

        setApiData(val);
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className='w-full h-full min-h-screen bg-primary text-primary font-primary sm:px-[4rem] md:max-w-[736px] mx-auto'
            >
                <Header />
                <main className=' mx-6 flex flex-col items-center'>
                    <SearchBar forwardData={apiDataHandler} />
                    <AnimatePresence>
                        {!isInitial && isFound && <DefinitionSection data={apiData} />}
                    </AnimatePresence>
                    <AnimatePresence>{!isInitial && !isFound && <NotFound />}</AnimatePresence>
                </main>
            </motion.div>
        </AnimatePresence>
    );
}
