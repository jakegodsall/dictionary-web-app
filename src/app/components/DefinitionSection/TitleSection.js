import React from 'react';
import PlayButton from './PlayButton';

const TitleSection = ({ word, phonetic, phonetics }) => {
    let audioRef = undefined;

    if (typeof phonetics[0] !== 'undefined') {
        audioRef = phonetics[0].audio;
    } else {
    }

    return (
        <div className='flex justify-between items-center my-[3.2rem]'>
            <div className='flex flex-col gap-[0.9rem]'>
                <p className='text-[3.2rem] sm:text-[6.4rem]'>{word}</p>
                <p className='text-[1.8rem] text-accent sm:text-[2.4rem] dark:text-accent'>
                    {phonetic}
                </p>
            </div>
            {typeof audioRef !== 'undefined' && audioRef.length > 0 && (
                <PlayButton audioRef={audioRef} />
            )}
        </div>
    );
};

export default TitleSection;
