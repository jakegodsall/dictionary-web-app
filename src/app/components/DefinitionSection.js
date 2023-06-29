'use client';

import { useEffect } from 'react';

const getData = async () => {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/bore`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
};

const DefinitionSection = async ({ input }) => {
    useEffect(() => {
        console.log('useEffect was called');
        const data = getData();

        console.log(data);
    }, [input]);

    // const data = await getData();

    // console.log(data);

    return <div>Test</div>;
};

export default DefinitionSection;
