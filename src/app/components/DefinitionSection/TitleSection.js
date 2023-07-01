import React from 'react';
import PlayButton from './PlayButton';

const TitleSection = ({ word, phonetic }) => {
    console.log('from title', word);
    return (
        <div className='flex justify-between items-center my-[3.2rem]'>
            <div className='flex flex-col gap-[0.9rem]'>
                <p className='text-[3.2rem]'>{word}</p>
                <p className='text-[1.8rem] text-accent'>{phonetic}</p>
            </div>
            <PlayButton />
        </div>
    );
};

export default TitleSection;
