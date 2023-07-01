import React from 'react';

const SourceSection = ({ sources }) => {
    return (
        <div className='flex flex-col gap-4 my-[2.6rem]'>
            <p className='text-[1.4rem] text-secondary underline'>Source</p>
            <ul>
                {sources.map((source, idx) => {
                    return (
                        <li key={idx} className='text-[1.4rem] underline'>
                            <a href={source}>{source}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SourceSection;
