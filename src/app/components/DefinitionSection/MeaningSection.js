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
                <p className='italic font-bold text-[1.8rem] sm:text-[2.4rem] sm:italic'>
                    {meaning.partOfSpeech}
                </p>
                <div className='w-full h-[0.06rem] bg-[#E9E9E9]'></div>
            </div>
            <p className='text-secondary mb-[1.6rem] text-[1.6rem] sm:text-[2rem] sm:mb-[2.7rem]'>
                Meaning
            </p>
            <ul className='mb-10 flex flex-col gap-[1.3rem]'>
                {meaning.definitions.map((definition, idx) => {
                    console.log(definition.example);

                    return (
                        <li
                            key={idx}
                            className='list-disc list-inside marker:text-accent text-[1.5rem] sm:text-[1.8rem]'
                        >
                            {definition.definition}
                            {typeof definition.example !== 'undefined' && (
                                <p className='text-secondary text-[1.5rem] mt-[1.3rem] ml-[2.3rem] sm:text-[1.8rem]'>
                                    {`"${definition.example}"`}
                                </p>
                            )}
                        </li>
                    );
                })}
            </ul>
            {synonyms.length > 0 && (
                <div className='flex gap-10 text-[2rem]'>
                    <p className='dark:text-secondary'>Synonyms</p>
                    <ul className='flex items-center gap-4'>
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
            {antonyms.length > 0 && (
                <div className='flex gap-10 text-[2rem]'>
                    <p className='dark:text-secondary'>Antonyms</p>
                    <ul className='flex items-center gap-4'>
                        {antonyms.map((antonym, idx) => {
                            return (
                                <li key={idx} className='text-accent text-[1.6rem]'>
                                    {antonym}
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
