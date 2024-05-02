const info = {
  name: 'Ethel Benavidez',
  title: 'Software Engineer',
  position: 'Full-stack, Mobile, and API Developer',
  intro: '',
}

// eslint-disable-next-line react/prop-types
const Hero = ({ className }) => {

  return (
    <div className={`text-white  sm:text-red-400 md:text-yellow-400 lg:text-cyan-400 xl:text-lime-400 2xl:text-purple-700 ${className} `}>
      <div className="">
        <div className="py-1 text-3xl sm:text-5xl lg:text-5xl font-bold">{info.name}</div>
        <div className="py-1 text-xl">{info.title}</div>
        <div className="pt-1 text-slate-400">{info.position}</div>
        <div>{info.intro}</div>
      </div>
    </div>
  )
}

export default Hero