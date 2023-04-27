import Image from 'next/image';
import juliusomo from '../../public/images/avatars/image-juliusomo.png';
const ReplyPost = () => {
  return (
    <div className='md:flex-nowrap bg-neutral-white max-w-[1440px] w-1/2 flex flex-wrap justify-between p-5 rounded-md mt-6'>
      <Image
        src={juliusomo}
        alt='juliusomo'
        className='md:order-first md:w-10 md:h-10 w-8 h-8'
      />
      <textarea
        className='md:mx-3 order-first px-5 placeholder:text-neutral-grayishBlue border border-neutral-lightGray resize-none py-2 text-neutral-grayishBlue rounded-md w-full h-28 mb-3'
        placeholder='Add a comment...'
      ></textarea>
      <button
        type='submit'
        className='bg-primary-moderateBlue text-base text-neutral-white font-bold rounded-md px-8 h-12 hover:opacity-30'
      >
        SEND
      </button>
    </div>
  );
};

export default ReplyPost;
