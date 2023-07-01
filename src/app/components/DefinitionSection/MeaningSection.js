import React from 'react';

const MeaningSection = ({ meaning }) => {
    const synonyms = [];
    const antonyms = [];

    // get synonyms from "meaning" level
    meaning.synonyms.map((synonym) => {
        synonyms.push(synonym);
    });

    // get antonyms from "meaning" level
    meaning.antonyms.map((antonym) => {
        antonyms.push(antonym);
    });

    meaning.definitions.map((definition) => {
        // get synonyms from definition level
        definition.synonyms.map((synonym) => {
            synonyms.push(synonym);
        });

        // get antonyms from definition level
        definition.antonyms.map((antonym) => {
            antonyms.push(antonym);
        });
    });

    return (
        <div className='mb-8'>
            <div className='flex items-center gap-4 mb-8'>
                <p className='italic font-bold'>{meaning.partOfSpeech}</p>
                <div className='w-full h-[0.06rem] bg-[#E9E9E9]'></div>
            </div>
            <p className='text-secondary mb-4 text-[1rem]'>Meaning</p>
            <ul>
                {meaning.definitions.map((definition, idx) => {
                    return (
                        <li key={idx} className='list-disc list-inside marker:text-accent'>
                            {definition.definition}
                        </li>
                    );
                })}
            </ul>
            {synonyms.length > 0 && (
                <div className='flex gap-10'>
                    <p className=''>Synonyms</p>
                    <ul>
                        {synonyms.map((synonym, idx) => {
                            return (
                                <li key={idx} className='text-accent'>
                                    {synonym}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MeaningSection;
