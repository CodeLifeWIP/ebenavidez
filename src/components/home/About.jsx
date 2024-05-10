import StickyTitle from '../StickyTitle.jsx'

// eslint-disable-next-line react/prop-types
const About = ({ className, data }) => {
  const info = data
  return (
    <div id='About' className={`text-slate-400 leading-loose lg:text-justify lg:px-4 xl:px-4 ${className}`}>
      <StickyTitle title="About" className='lg:hidden' />
      {info}
    </div>
  )
}

export default About