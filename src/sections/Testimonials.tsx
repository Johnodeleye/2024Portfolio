import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import grainImage from '@/assets/images/grain.jpg';
import Card from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Focus Kid",
    position: "Founder @ Focus Tech",
    text: "Perspicacious is instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Emmanuel Olalere",
    position: "CEO @ BrightWell Properties",
    text: "Working with John was a pleasure. His expertise in web development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "King Sam",
    position: "CEO @ SamForex",
    text: "John's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Crowns TV",
    position: "Director @ Crowns-Tv",
    text: "John is a true Software developer wizard. He took our complex product and transformed it into an intuitive and engaging user interface & experience. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar1,
  },
  {
    name: "Tobi Saliu",
    position: "Founder @ Unique Ads Ltd",
    text: "John's work on our website has been nothing short of exceptional. He's a talented software developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        {/**container makes content to be fit in the screen i.e it makes the contnet not to be too be in the edge of the screen */}
      <SectionHeader 
      eyebrow="Happy Clients"
      title="What Clients Say about Me"
      description="Don't just take my word for it. See what my client have to say about my work."
      />
      <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
        {/** THis overflow makes the screen not be moving around it make it stick to the screen */}
        <div className="flex gap-8 flex-none pr-8 animate-move-left [animation-duration:90s] 
        hover:[animation-play-state:paused]">
          {[...new Array(2)].fill(0).map((_, index)=>(
            <Fragment key={index}>
        {testimonials.map(testimony =>(
          <Card key={testimony.name} className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300">
            <div className="flex gap-4 items-center">
            <div className="absolute inset-0 opacity-5 -z-10" 
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}></div>
            <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
            <Image src={testimony.avatar} alt={testimony.name} className="max-h-full"/>
            </div>
            <div>
            <div className="font-semibold">{testimony.name}</div>
            <div className="text-sm text-white/40">{testimony.position}</div>
            </div>
            </div>
            <p className="mt-4 md:mt-6 text-sm md:text-base">{testimony.text}</p>
          </Card>
        ))}
          </Fragment>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
};
