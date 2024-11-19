import hubpostbanner from "@/assets/images/Hubpostbanner.jpg";
import porthome from "@/assets/images/porthome.jpg";
import Todo from "@/assets/images/Todo.jpg";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUp from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import SectionHeader from "@/components/SectionHeader";
import church from '@/assets/images/daVID lAND.jpg';
import behind from '@/assets/images/Behind.jpg'
import Card from "@/components/Card";
const portfolioProjects = [
  {
    company: "HubPost",
    year: "2024",
    title: "HubPost Social Network Application",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://hubpost-app.vercel.app",
    image: hubpostbanner,
  },
  {
    company: "Bright-Well Properties Ltd",
    year: "2024",
    title: "Estate Landing page for Bright-Well Properties Ltd",
    results: [
      { title: "Enhanced user experience by 90%" },
      { title: "Improved site speed by 100%" },
      { title: "Increased mobile traffic by 45%" },
    ],
    link: "https://brightwellproperties.vercel.app",
    image: behind,
  },
  {
    company: "Perspicacious",
    year: "2024",
    title: "Personal Portfolio",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "",
    image: porthome,
  },
  {
    company: "Church Page",
    year: "2024",
    title: "Rccg David's pavilion Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://davidpavilion.onrender.com",
    image: church,
  },
];

export const ProjectsSection = () => {
  return(
    <section className="pb-16 lg:py-24" id="project">
      <div className="container">
        {/**This Styling of bg-clip-text along with text-transparent makes The text {real-world result to be gradient}**/}
          <SectionHeader
          eyebrow="Real-World Result"
          title="Featured Project"
          description="See how i transformed concepts into engaging digital experiences."
          />
        <div className="md:mt-20 mt-10 gap-20 flex flex-col">
          {portfolioProjects.map((project, projectIndex) => (
            <Card key={projectIndex} className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky"
            style={{
              top: `calc(64px + ${projectIndex * 40}px`
            }}>
              <div className="absolute inset-0 -z-10 opacity-5" 
              style={{
                backgroundImage: `url(${grainImage.src})`,
              }}></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm bg-clip-text text-transparent">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map(result => (
                    <li className="flex gap-2 text-sm md:text-base text-white/50" key='project.results'>
                      <CheckCircleIcon className='size-5 md:size-6' key={project.results}/>
                      <span>{result.title}</span>
                      </li>
                  ))}
                </ul>
                <a href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                  <span>Visit Live Site</span>
                  <ArrowUp className='size-4'/>
                </button>
                </a>
                </div>
                <div className="relative">
                <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
                </div>
                </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}