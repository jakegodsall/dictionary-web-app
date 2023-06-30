import React from 'react';

const MeaningSection = ({ meaning }) => {
    console.log('tets', meaning.definitions);
    return (
        <div>
            <p>Meaning</p>
            <ul>
                {meaning.definitions.map((definition, idx) => {
                    return <li key={idx}>{definition.definition}</li>;
                })}
            </ul>
        </div>
    );
};

export default MeaningSection;
