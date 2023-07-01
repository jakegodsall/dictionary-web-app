import Image from 'next/image';

import NewWindowIcon from '../../../../public/images/icon-new-window.svg';

const SourceSection = ({ sources }) => {
    return (
        <div className='flex flex-col gap-4 my-[2.6rem]'>
            <p className='text-[1.4rem] text-secondary underline'>Source</p>
            <ul>
                {sources.map((source, idx) => {
                    return (
                        <li
                            key={idx}
                            className='text-[1.4rem] underline flex gap-[.8rem] items-center'
                        >
                            {source}
                            <a href={source}>
                                <Image src={NewWindowIcon} alt='new window' />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SourceSection;
