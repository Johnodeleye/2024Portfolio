import { Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import hubpost from '@/assets/images/Logo White.png';

const footerLinks = [
  {
    title: 'Instagram',
    link: 'https://instagram.com/perspicacious.dev',
    icon: <Instagram size={20} />,
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/thefuturedev',
    icon: <Linkedin size={20} />,
  },
  {
    title: 'Twitter',
    link: 'https://x.com/@pthefuture_',
    icon: <Twitter size={20} />,
  },
  {
    title: 'HubPost',
    link: 'https://hubpost-app.vercel.app/authors/johnayomide920@gmail.com',
    icon: (
      <Image
        src={hubpost}
        alt="HubPost Logo"
        width={20}
        height={20}
        className="rounded-sm"
      />
    ),
  },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo or Brand Name */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold">Perspicacious.Dev</h2>
            <p className="text-sm text-gray-400">&copy; 2024 All Rights Reserved</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center gap-4 md:flex-row">
            {footerLinks.map(({ title, link, icon }) => (
              <Link
                key={title}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition"
              >
                {icon}
                <span className="text-sm font-medium">{title}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Horizontal Line */}
        <hr className="my-8 border-gray-600 w-full" />

        {/* Decorative Background */}
        <div className="mt-8 h-[200px] bg-emerald-300/20 rounded-full blur-[100px] mx-auto w-3/4"></div>
      </div>
    </footer>
  );
};
