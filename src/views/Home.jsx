import { useState, useEffect, useRef } from 'react'
import Hero from '../components/home/Hero'
import TableContents from '../components/home/TableContents'
import About from '../components/home/About'
import Experience from '../components/home/Experience'
import Project from '../components/home/Project'
import Products from '../components/home/Products'
import Footer from '../components/home/Footer'
import { useDispatch } from 'react-redux'
import { tableContentsActions } from '../store/tableContents'

const info = {
  name: 'Ethel Benavidez',
  title: 'Software Engineer',
  position: 'Full-stack, Mobile, and API Developer',
  intro: '',
}

const about = 'A full stack and mobile developer with 8 years of experience and a Bachelors Degree in Information Technology. Developed, maintained and optimized Web, RESTful API applications using PHP on a Laravel framework, MySQL, Javascript along with various other technologies. With experience in TDD, mobile development using Java for android applications and Flutter, implementing 3rd party APIs, Git as version control and servers on AWS. Writes code in clean, efficient and maintainable manner. Result-driven, articulate, analytical, and comfortable to think outside the box. Passionate in problem solving, learning new technologies and optimization. Comfortable working with a team and with minimal supervision required. Worked with multiple nationalities based on multiple countries and timezones.'

const experiences = [
  {
    date: '2023 - Present',
    company: 'iNeedParking Technologies Corp',
    title: 'Software Engineer',
    position: 'Mobile Developer',
    detail: 'Design, develop and test mobile applications written in Flutter/Dart. Co- design UI / UX and mobile application flow. Give advice to stakeholders about technical matters relating to software application development designing and process.',
    skill: ['Flutter', 'Dart', 'Firebase', 'MySQL', 'GIT'],
    link: 'https://ineed.com.ph/',
  },
  {
    date: '2022 - 2023',
    company: 'VIPESO, Inc.',
    title: 'Software Engineer',
    position: 'Mobile Developer',
    detail: 'Develop, maintain, test and deploy APIs and mobile applications following software engineering best practices and principles to ensure testability, maintainability and scalability of the application. Collaborate with cross - functional teams, from multiple countries to define, design, review, and ship new  features.',
    skill: ['Flutter', 'Dart', 'Kotlin', 'Laravel', 'MySQL', 'GIT', 'SVN'],
    link: 'https://www.linkedin.com/company/vipeso/',
  },
  {
    date: '2018 - 2022',
    company: 'Zagro Singapore Pte Ltd',
    title: 'Software Engineer',
    position: 'Fullstack Web Developer',
    detail: 'Design, develop and maintain web and e-commerce applications and APIs following software engineering best practices and principles to ensure scalability, maintainability and readability of the software. Bug fixing, maintaining and updating application performance.Making sure that  bugs and fixes are well documented, data is current and new features are  delivered within the agreed upon time frame. Collaborate with cross - functional teams, from multiple countries to define, design, review, and ship new  features. Redesign, upgrade and refactor older applications to follow software engineering best practices. Optimize performance of software applications. Design, implement and enhance software development procedures for the team',
    skill: ['Laravel', 'HTML', 'CSS', 'Javascript', 'MySQL', 'AWS', 'GIT'],
    link: 'https://www.zagro.com/',
  },
  {
    date: '2015 - 2017',
    company: 'MSG (Tech start-up)',
    title: 'Software Engineer',
    position: 'Mobile Developer | FullStack Web Developer | API Developer',
    detail: 'Design and develop advanced applications for the Android and Web platform following software engineering best practices and principles to ensure scalability,  maintainability and readability of the software. Design and develop back- end services and database using established design  principles to create a solid, well - designed and secure systems.Leveraging the  power of the database for speed and data integrity. Bug fixing, maintaining and updating application performance.Making sure that  bugs and fixes are well documented, data is current and new features are  delivered within the agreed upon time frame. Collaborate with cross - functional teams to define, design, review, and ship new features. Learn new technologies, frameworks and APIs applicable to the needs and  requirements of the client. Documentation, daily reports and scrum.Keeping track of all the aspects of the  application and its development.Ensuring that tasks are planned accordingly and  completed in time.',
    skill: ['Kotlin', 'Java', 'Laravel', 'Codeigniter', 'HTML', 'CSS', 'Javascript', 'MySQL', 'Firebase', 'GIT'],
    link: '',
  },
]

const projects = [
  {
    title: 'Video to Audio Downloader',
    image: './img/vtad.webp',
    detail: 'Seamless Video-to-Audio Conversion: Video to Audio Downloader revolutionizes the way you consume multimedia content by allowing you to extract the audio portion of a video effortlessly. Enjoy the audio essence of your favorite videos in a new and exciting way.',
    stackList: ['Flutter', 'Firebase', 'Git / Git Actions'],
    techList: ['TDD', 'CI/CD', 'Clean Architecture'],
    link: 'https://play.google.com/store/apps/details?id=com.mangotechnologies.video_to_audio',
  },
  {
    title: 'Personal Website v1',
    image: './img/ebenavidez.jpg',
    detail: 'This is the first iteration of my personal website built with vanilla React, Redux and styled with TailwindCSS',
    stackList: ['React', 'Tailwind', 'GIT'],
    techList: [],
    link: 'http://ebenavidez.mymangotechnologies.com',
  },
]

const products = [
  { id: 1, title: 'Coffee', image: './img/stock.jpg', price: '250', qty: 0 },
  { id: 2, title: 'Coffee and snack', image: './img/stock.jpg', price: '500', qty: 0 },
  { id: 3, title: 'Dinner', image: './img/stock.jpg', price: '1000', qty: 0 },
]

const Home = () => {
  const [mousePos, setMousePos] = useState({})
  const secondaryCursor = useRef(null)
  const dispatch = useDispatch()

  // Follow mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove,
      )
    }
  })

  // follow mouse movement
  useEffect(() => {
    secondaryCursor.current.style.transform = `translate3d(${mousePos.x - 100}px, ${mousePos.y}px, 0)`
  }, [mousePos])

  const lgPageLayout = 'lg:flex lg:justify-between lg:h-screen lg:overflow-y-hidden lg:w-full lg:grid lg:grid-cols-2'
  const leftPageMargin = 'mx-6 my-10 md:mx-16 md:my-20 lg:mr-0 lg:ml-24 lg:mt-24 xl:ml-40 xl:mt-28'
  const rightPageMargin = 'mx-6 my-10 md:mx-16 md:my-20 lg:ml-0 lg:mr-24 lg:my-0 lg:pt-24 xl:mr-40 xl:my-0 xl:pt-28'

  return (
    <div className='bg-slate-900 xl:h-screen xl:relative xl:z-0 xl:flex'>
      <div ref={secondaryCursor} className='hidden xl:block w-36 h-36 bg-blue-500 blur-extra' />

      <div className={`xl:absolute xl:z-10 ${lgPageLayout}`}>

        <div className="">
          <Hero data={info} className={`mb-32 sm:mb-52 md:mb-40 lg:mb-0 ${leftPageMargin}`} />
          <TableContents className={`hidden lg:block ${leftPageMargin}`} />
        </div>

        <div className="scroll-smooth lg:h-screen lg:overflow-y-auto" onWheel={(e) => dispatch(tableContentsActions.setIsManuallyScrolling(true))} >
          <About data={about} className={rightPageMargin} />
          <Experience data={experiences} className={rightPageMargin} />
          <Project data={projects} className={rightPageMargin} />
          <Products data={products} className={`hidden lg:hidden ${rightPageMargin}`} />
          <Footer className={`hidden lg:block ${rightPageMargin}`} />
        </div>

        <Products data={products} className={`hidden lg:hidden ${rightPageMargin}`} />
        <Footer className={`block lg:hidden ${rightPageMargin}`} />
      </div>

    </div>
  )
}

export default Home
