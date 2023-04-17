import Image from 'next/image';
import juliusomo from '../../public/images/avatars/image-juliusomo.png';
const ReplyPost = () => {
  return (
    <div className='bg-neutral-white max-w-[1440px] w-1/2 flex justify-between	 p-5 rounded-md mt-6'>
      <Image src={juliusomo} alt='juliusomo' className='w-10 h-10' />
      <textarea
        className='px-5 placeholder:text-neutral-grayishBlue border border-neutral-lightGray resize-none py-2 text-neutral-grayishBlue rounded-md w-full h-28 mx-3'
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
