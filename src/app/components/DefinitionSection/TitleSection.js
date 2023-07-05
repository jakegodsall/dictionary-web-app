import React from 'react';
import PlayButton from './PlayButton';

const TitleSection = ({ word, phonetic, phonetics }) => {
    console.log('from title', word);

    const audioRef = phonetics[0].audio;

    return (
        <div className='flex justify-between items-center my-[3.2rem]'>
            <div className='flex flex-col gap-[0.9rem]'>
                <p className='text-[3.2rem] sm:text-[6.4rem]'>{word}</p>
                <p className='text-[1.8rem] text-accent sm:text-[2.4rem]'>{phonetic}</p>
            </div>
            {audioRef !== 'undefined' && audioRef.length > 0 && <PlayButton audioRef={audioRef} />}
        </div>
    );
};

export default TitleSection;
