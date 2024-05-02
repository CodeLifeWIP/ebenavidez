import StickyTitle from '../StickyTitle.jsx'

// eslint-disable-next-line react/prop-types
const About = ({ className }) => {
  return (
    <div className={`text-slate-400  leading-loose lg:text-justify xl:px-4 ${className}`}>
      <StickyTitle title="About" className='lg:hidden' />
      <p>   A full stack and mobile developer with 8 years of experience and a Bachelors Degree in Information Technology.
        Developed, maintained and optimized Web, RESTful API applications using PHP on a Laravel framework, MySQL, Javascript along with various other technologies. With experience in TDD, mobile development using Java for android applications and Flutter, implementing 3rd party APIs, Git as version control and servers on AWS.
        Writes code in clean, efficient and maintainable manner. With experience in testing, implementing 3rd party APIs, Git and SVN as version control and servers on AWS.
        Result-driven, articulate, analytical, and comfortable to think outside the box. Passionate in problem solving, learning new technologies and optimization. Comfortable working with a team and with minimal supervision required.</p>
    </div>
  )
}

export default About