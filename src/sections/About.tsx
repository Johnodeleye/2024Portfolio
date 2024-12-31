'use client';
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import GithubIcon from '@/assets/icons/github.svg';
import ReactIcon from '@/assets/icons/react.svg';
import { TechIcon } from "@/components/TechIcon";
import mapImage from '@/assets/images/map.jpg';
import smileMemoji from '@/assets/images/memoji-smile.png';
import { CardHeader } from "@/components/CardHeader";
import { Toolboxitems } from "@/components/Toolboxitems";
import {motion} from 'framer-motion';
import { useRef } from "react";

const toolboxItems = [
  {
    title: 'Javascript',
    iconType: <JavascriptIcon/>,
  },
  {
    title: 'React',
    iconType: <ReactIcon/>,
  },
  {
    title: 'CSS',
    iconType: <CssIcon/>,
  },
  {
    title: 'Chrome',
    iconType: <ChromeIcon/>,
  },
  {
    title: 'Github',
    iconType: <GithubIcon/>,
  },
  
  {
    title: 'Html5',
    iconType: <HTMLIcon/>,
  },
]

const hobbies = [
  {
    title: 'Photography',
    emoji: '📸',
    left: '46%',
    top:  '5%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left:'10%',
    top: '35%',
  },
  {
    title: 'Music',
    emoji: '🎹',
    left:'70%',
    top: '45%',
  },
  {
    title: 'Fitness',
    emoji: '🤸‍♂️',
    left:'5%',
    top: '5%',
  },
  {
    title: 'Vlog',
    emoji: '🎥',
    left:'39%',
    top: '40%',
  },
  {
    title: 'Learning',
    emoji: '📕',
    left:'48%',
    top: '70%',
  },
  {
    title: 'Adventure',
    emoji: '✈',
    left:'5%',
    top: '63%',
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null)
  return ( 
    <div className="py-20 lg:py-28" id='about'>
      <div className="container">
      <SectionHeader 
      eyebrow="About Me"
      title="A Glimps Into My World!"
      description="Learn More about who I am, what I do, and what inspires me."
      />

      {/**Book */}
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
        <Card className="h-[320px] md:col-span-2 lg:col-span-1">
          <CardHeader title="My Reads" description="Explore the book shaping my perspectives."/>
          <div className="w-40 mx-auto mt-2 md:mt-0">
          <Image src={bookImage} alt={'book cover'}/>
          </div>
        </Card>
        
        {/**Tool box */}
        <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader title="My Toolbox" description="Explore the technologies  and tool I use to craft exceptional digital experiences" className=""/>
            <Toolboxitems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
            <Toolboxitems items={toolboxItems} className="mt-6" itemsWrapperClassName="-translate-x-1/2 animate-move-right 
            [animation-duration:15s]"/>
        </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">

        {/**Hobbies */}
        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
        <CardHeader title="Beyond the Code" description="Explore my interest and hobbies behind the digital realms" className="px-6 py-6"/>
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map(hobby => (
                <motion.div key={hobby.title} className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                  left: hobby.left,
                  top: hobby.top,
                }}
                drag
                dragConstraints={constraintRef}
                >

                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
        </Card>

        {/**Map */}
        <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
          <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top"/>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
            <Image src={'/profile.jpeg'} alt="image" className="size-20 rounded-full object-contain" width={70} height={70}/>
            </div>
        </Card>

        </div>
      </div>
    </div>
    </div>
  )
};