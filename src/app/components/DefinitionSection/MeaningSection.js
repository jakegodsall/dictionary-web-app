import React from 'react';

const MeaningSection = ({ meaning }) => {
    const synonyms = [];
    meaning.definitions.forEach((definition) => {
        console.log(definition);
        definition.synonyms.forEach((synonym) => {
            console.log(synonym);
            synonyms.push(synonym);
        });
    });

    console.log(synonyms);

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
        </div>
    );
};

export default MeaningSection;
