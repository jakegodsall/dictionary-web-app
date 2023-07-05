import { easeInOut, motion } from 'framer-motion';

import MeaningSection from './MeaningSection';
import SourceSection from './SourceSection';
import TitleSection from './TitleSection';

const DefinitionSection = ({ data }) => {
    const word = data[0];

    console.log(word);

    const meanings = word.meanings;
    const sources = word.sourceUrls;

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: easeInOut }}
        >
            <TitleSection word={word.word} phonetic={word.phonetic} phonetics={word.phonetics} />
            <div>
                {meanings.map((meaning, idx) => {
                    return <MeaningSection meaning={meaning} key={idx} />;
                })}
            </div>
            <div className='w-full h-[1px] bg-[#e9e9e9]'></div>
            <SourceSection sources={sources} />
        </motion.main>
    );
};

export default DefinitionSection;
