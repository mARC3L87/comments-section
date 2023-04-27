import Image from 'next/image';
import replyIcon from '../../public/images/icon-reply.svg';
import amyrobson from '../../public/images/avatars/image-amyrobson.png';
const SinglePost = () => {
  return (
    <div className='md:flex-nowrap md:items-start flex-wrap bg-neutral-white max-w-[1440px] w-1/2 flex p-5 rounded-md mt-6 justify-between'>
      <div className='md:order-first md:flex-col md:justify-center md:h-20 md:px-0 order-3 flex flex-row items-center rounded-lg bg-neutral-veryLightGray md:pt-2 px-3 text-xl text-primary-lightGrayishBlue font-bold'>
        <p className='hover:text-primary-moderateBlue cursor-pointer'>+</p>
        <p className='text-primary-moderateBlue text-base mx-3'>12</p>
        <p className='hover:text-primary-moderateBlue cursor-pointer md:mb-1 pb-1'>
          -
        </p>
      </div>
      <div className='flex flex-col w-full md:ml-5'>
        <div className=' flex-row flex justify-between h-5 mb-3'>
          <div className='flex'>
            <Image src={amyrobson} alt='amyrobson' className='w-8 h-8 mr-3' />
            <p className='text-neutral-darkBlue font-bold'>amyrobson</p>
            <p className='text-neutral-grayishBlue font-medium ml-2'>
              1 month ago
            </p>
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
      <div className='md:order-3 order-4 flex flex-row items-center hover:opacity-30 cursor-pointer'>
        <Image src={replyIcon} alt='reply' className='h-[15px]' />
        <p className='text-primary-moderateBlue font-bold mx-1'>Reply</p>
      </div>
    </div>
  );
};
export default SinglePost;
