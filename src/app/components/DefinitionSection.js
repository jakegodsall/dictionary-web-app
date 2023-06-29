import React from 'react';

const getData = async () => {
    const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
};

const DefinitionSection = async () => {
    const data = await getData();

    console.log(data);

    return <div>Test</div>;
};

export default DefinitionSection;
