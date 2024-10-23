 export const TechIcon = ({ component }: {component: React.ReactNode}) => {
    const Component = component;
    return (
        <>
        <div className="size-10 text-sky-400 fill-[url(#tech-icon-gradient)]">{Component}</div>
        <svg className="size-0 absolute">
            <linearGradient id="tech-icon-gradient">
                <stop offset='0%' stopColor="rgb(110 231 183)"/>
                <stop offset='100%' stopColor="rgb(56 189 248)"/>
            </linearGradient>
        </svg>
        </>
    );
}