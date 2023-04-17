import Image from 'next/image';
import replyIcon from '../../public/images/icon-reply.svg';
const SinglePost = () => {
  return (
    <div className='bg-neutral-white max-w-[1440px] w-1/2 flex p-5 rounded-md mt-6'>
      <div className='group flex flex-col items-center h-20 justify-center rounded-lg bg-neutral-veryLightGray py-1 px-2 text-xl text-primary-lightGrayishBlue font-bold'>
        <p className='hover:text-primary-moderateBlue cursor-pointer'>+</p>
        <p className='text-primary-moderateBlue text-base'>12</p>
        <p className='hover:text-primary-moderateBlue cursor-pointer'>-</p>
      </div>
      <div className='flex flex-col w-full ml-5'>
        <div className=' flex-row flex justify-between h-5'>
          <div className='flex'>
            <p className='text-neutral-darkBlue font-bold'>amyrobson</p>
            <p className='text-neutral-grayishBlue font-bold ml-2'>
              1 month ago
            </p>
          </div>
          <div className='flex flex-row items-center hover:opacity-30 cursor-pointer'>
            <Image src={replyIcon} alt='reply' className='h-[15px]' />
            <p className='text-primary-moderateBlue font-bold mx-1'>Reply</p>
          </div>
        </div>
        <div className='text-neutral-grayishBlue font-medium'>
          <p className='py-3'>
            Impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible.You&apos;ve nailed the design and the
            responsiveness at various breakpoints works really well.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SinglePost;