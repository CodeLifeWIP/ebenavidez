import StickyTitle from '../StickyTitle.jsx'

// eslint-disable-next-line react/prop-types
const About = ({ className }) => {
  return (
    <div id='About' className={`text-slate-400 leading-loose lg:text-justify lg:px-4 xl:px-4 ${className}`}>
      <StickyTitle title="About" className='lg:hidden' />
      <p>{info}</p>
    </div>
  )
}

export default About