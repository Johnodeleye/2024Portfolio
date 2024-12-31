import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google'
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
   subsets: ['latin'], 
   variable: '--font-serif',
    weight:['400'],
  });

export const metadata: Metadata = {
  title: "Odeleye John Perspicacious | Full-Stack Developer | Mobile Developer | Tech Creator",
  description: "Welcome to the personal website of Ayomide John Perspicacious, a skilled Full-Stack and Mobile Developer, Tech Creator, and Founder of HubPost Community. Explore my portfolio, expertise in React, Next.js, TypeScript, and Node.js, and learn more about my journey in tech!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <meta name="google-site-verification" content="P2r_Z6CA_GDV7PMAudkhj9jsvXZfGY1Aq77CTvllPJw" />
      </head>
      <body className={twMerge(
        inter.variable, calistoga.variable, 
        "bg-gray-900 text-white antialiased font-sans")}
        >{children}</body>
    </html>
  );
}
