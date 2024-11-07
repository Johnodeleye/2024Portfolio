import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import Link from 'next/link';
const footerLinks = [
  {
    title: 'Instagram',
    link: 'instagram.com/perspicacious.dev',
  },
  {
    title: 'LinkedIn',
    link: '#',
  },
  {
    title: 'Twitter',
    link: 'x.com/@pthefuture_',
  },
  {
    title: 'HubPost',
    link: 'https://hubpost-app.vercel.app/authors/johnayomide920@gmail.com',
  },
]
export const Footer = () => {
  return (
    <footer className='relative overflow-x-clip'>
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between'>
          <div className='text-white/40'>&copy; 2024. All rights reserved</div>
          <nav className='flex flex-col items-center gap-8 md:flex-row cursor-pointer'>
            {footerLinks.map(link => (
              <Link href={link.link} key={link.title} className='inline-flex items-center gap-1 cursor-pointer'>
                <span className='font-semibold cursor-pointer'>{link.title}</span>
                <ArrowUpRightIcon className='size-4' />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}; 
