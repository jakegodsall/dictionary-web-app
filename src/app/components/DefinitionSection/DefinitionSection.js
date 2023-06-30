import MeaningSection from './MeaningSection';

const DefinitionSection = ({ data }) => {
    // const meanings = data[0].meanings;

    const testWord = {
        word: 'keyboard',
        phonetic: '/ˈkiːbɔːd/',
        phonetics: [
            {
                text: '/ˈkiːbɔːd/',
                audio: '',
            },
            {
                text: '/ˈkiːbɔːd/',
                audio: '',
            },
            {
                text: '/ˈkibɔɹd/',
                audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3',
                sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=1755168',
                license: {
                    name: 'BY-SA 3.0',
                    url: 'https://creativecommons.org/licenses/by-sa/3.0',
                },
            },
        ],
        meanings: [
            {
                partOfSpeech: 'noun',
                definitions: [
                    {
                        definition:
                            '(etc.) A set of keys used to operate a typewriter, computer etc.',
                        synonyms: [],
                        antonyms: [],
                    },
                    {
                        definition:
                            'A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.',
                        synonyms: [],
                        antonyms: [],
                    },
                    {
                        definition:
                            'A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.',
                        synonyms: [],
                        antonyms: [],
                    },
                ],
                synonyms: ['electronic keyboard'],
                antonyms: [],
            },
            {
                partOfSpeech: 'verb',
                definitions: [
                    {
                        definition: 'To type on a computer keyboard.',
                        synonyms: [],
                        antonyms: [],
                        example: 'Keyboarding is the part of this job I hate the most.',
                    },
                ],
                synonyms: [],
                antonyms: [],
            },
        ],
        license: {
            name: 'CC BY-SA 3.0',
            url: 'https://creativecommons.org/licenses/by-sa/3.0',
        },
        sourceUrls: ['https://en.wiktionary.org/wiki/keyboard'],
    };

    const meanings = testWord.meanings;

    console.log(meanings);

    return (
        <div>
            {meanings.map((meaning, idx) => {
                return <MeaningSection meaning={meaning} key={idx} />;
            })}
        </div>
    );
};

export default DefinitionSection;
