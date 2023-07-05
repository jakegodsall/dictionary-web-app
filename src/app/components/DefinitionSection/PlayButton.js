import Image from 'next/image';

import PlayIcon from '../../../../public/images/icon-play.svg';

const PlayButton = ({ audioRef }) => {
    const playAudio = () => {
        const audio = new Audio(audioRef);
        audio.play();
    };

    return (
        <Image
            src={PlayIcon}
            width='48px'
            height='48px'
            alt='play button'
            className='w-[4.8rem] h-[4.8rem] cursor-pointer duration-200 hover:opacity-75 hover:transition-opacity hover:duration-200 dark:hover:opacity-100 dark:hover:brightness-150'
            onClick={playAudio}
        />
    );
};

export default PlayButton;
