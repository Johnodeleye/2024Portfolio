'use client';

import Link from 'next/link';
import Image from 'next/image';
import hubpostLogo from '@/assets/images/Logo White.png';

export const HubPost = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-16 rounded-md mx-10 lg:mx-20">
      <div className="container mx-auto px-6 text-center ">
        <div className="mb-6">
          <Image src={hubpostLogo} alt="HubPost Logo" width={100} height={100} className="mx-auto" />
        </div>
        <h2 className="text-4xl font-bold mb-4">Join the HubPost Community</h2>
        <p className="mb-8 text-lg text-blue-100">
          Connect with developers, designers, and tech enthusiasts. Share ideas, spark innovation, and ignite creativity!
        </p>
        <Link href="https://hubpost-app.vercel.app" target="_blank"
           className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
            Join Now
        </Link>
      </div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-blue-800 opacity-10 pointer-events-none"></div>
    </section>
  );
};
