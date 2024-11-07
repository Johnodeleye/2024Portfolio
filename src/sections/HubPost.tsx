import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import Link from 'next/link';
export const HubPostSection = () => {
  return (
  <div className='py-16 pt-2 lg:py-24 lg:pt-0 '>
    <div className='container'> {/**The container makes it comes to the center of the screen */}
    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 
    px-10 rounded-3xl text-center relative overflow-hidden -z-10 md:text-left">
      <div className="absolute inset-0 opacity-5 -z-10" style={{
        backgroundImage: `url(${grainImage.src})`
        }}></div>
        <div className="flex flex-col gap-8 md:gap-16 items-center md:flex-row">
          <div>
    <h2 className='font-serif text-2xl md:text-3xl'>Spark, Connect, Ignite!</h2>
    <p className='text-sm mt-2 md:text-base'>
      Ready to Spark, & Ignite? Join HubPost and share experience and deliver values to others
    </p>
    </div>
    <div>
      <Link href={'https://hubpost-app.vercel.app'}>
    <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border-gray-950">
      <span className='font-semibold'>Join HubPost For Free!</span>
      <ArrowUpRightIcon className='size-4'/>
      </button>
      </Link>
      </div>
      </div>
      </div>
    </div>
  </div>
  );
};
