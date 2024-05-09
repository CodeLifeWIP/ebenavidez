/* eslint-disable react/prop-types */
const Hero = ({ className, data }) => {
  const info = data

  return (
    <div className={`text-white ${className} `}>
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