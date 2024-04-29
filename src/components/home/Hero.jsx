const info = {
  name: 'Ethel Benavidez',
  title: 'Software Engineer',
  position: 'Full-stack, Mobile, and API Developer',
  intro: '',
}

// eslint-disable-next-line react/prop-types
const Hero = ({ className }) => {

  return (
    <div className={`text-white sm:text-red-400 md:text-yellow-400 lg:text-cyan-400 xl:text-lime-400 2xl:text-purple-700 ${className} `}>
      <div className="my-8 mx-6 lg:my-24 lg:ml-24 xl:my-21 xl:ml-44">
        <div className="py-1 text-3xl lg:text-5xl font-bold">{info.name}</div>
        <div className="py-1 text-xl">{info.title}</div>
        <div className="pt-1 text-slate-400">{info.position}</div>
        <div>{info.intro}</div>
      </div>
    </div>
  )
}

export default Hero

// <div className={`text-slate-100/90 ${className} `}>


{/* <div className = {`text-white sm:text-red-400 md:text-orage-400 lg:text-amber-400 xl:text-lime-400 2xl:text-blue-400 ${className} `}>
<div className="my-24 mx-40 pt-2">
  <div className="mb-3 text-5xl font-semibold">{info.name}</div>
  <div className="mb-3 text-xl">{info.title}</div>
  <div className="mb-3 text-slate-400 font-light">{info.position}</div>
  <div>{info.intro}</div>
</div>
</div> */}