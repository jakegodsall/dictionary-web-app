import { easeInOut, motion } from 'framer-motion';

const NotFound = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: easeInOut }}
            className='flex flex-col items-center justify-center text-center mt-[13rem] max-w-[736px] mb-[40rem]'
        >
            <p className='mb-[2.4rem] text-[6.4rem]'>😕</p>
            <p className='capitalize mb-[2.4rem] text-[2rem] font-boldl'>No definitions found</p>
            <p className='text-secondary text-[1.8rem]'>
                Sorry pal, we couldn&apos;t find definitions for the word you were looking for. You
                can try the search again at later time or head to the web instead.
            </p>
        </motion.div>
    );
};

export default NotFound;
