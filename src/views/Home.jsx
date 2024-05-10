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
  title: 'Software Developer',
  position: 'Full-stack | Mobile | API',
  intro: '',
}

const about = <p>A full stack and mobile developer with 8 years of experience and a Bachelors Degree in Information Technology.
  Developed, maintained and optimized Web, RESTful API applications using PHP on a Laravel framework, MySQL, Javascript along with various other technologies.With experience in TDD, mobile development using Java for android applications and Flutter, implementing 3rd party APIs, Git as version control and servers on AWS.
  Writes code in clean, efficient and maintainable manner.With experience in testing, implementing 3rd party APIs, Git and SVN as version control and servers on AWS.
  Result - driven, articulate, analytical, and comfortable to think outside the box.Passionate in problem solving, learning new technologies and optimization.Comfortable working with a team and with minimal supervision required.</p>

const experiences = [
  {
    date: '2023 - Present',
    company: 'iNeedParking Technologies Corp',
    title: 'Software Engineer',
    position: 'Mobile Developer',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skill: ['Flutter', 'Dart', 'Firebase', 'MySQL', 'GIT'],
    link: '',
  },
  {
    date: '2022 - 2023',
    company: 'VIPESO, Inc.',
    title: 'Software Engineer',
    position: 'Mobile Developer',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skill: ['Flutter', 'Dart', 'Kotlin', 'Laravel', 'MySQL', 'GIT', 'SVN'],
    link: '',
  },
  {
    date: '2018 - 2022',
    company: 'Zagro Singapore Pte Ltd',
    title: 'Software Engineer',
    position: 'Fullstack Web Developer',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skill: ['Laravel', 'HTML', 'CSS', 'Javascript', 'MySQL', 'AWS', 'GIT'],
    link: '',
  },
  {
    date: '2015 - 2017',
    company: 'MSG (Tech start-up)',
    title: 'Software Engineer',
    position: 'Mobile Developer | FullStack Web Developer | API Developer',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skill: ['Kotlin', 'Java', 'Laravel', 'Codeigniter', 'HTML', 'CSS', 'Javascript', 'MySQL', 'Firebase', 'GIT'],
    link: '',
  },
]

const projects = [
  {
    title: 'Title 1',
    image: 'public/img/stock.jpg',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    stackList: ['Kotlin', 'Java', 'Laravel', 'Codeigniter', 'HTML', 'CSS', 'Javascript', 'MySQL', 'Firebase', 'GIT'],
    techList: ['TDD', 'CI/CD', 'Clean Architecture'],
    link: '',
  },
  {
    title: 'Title 2',
    image: 'public/img/stock.jpg',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    stackList: ['Kotlin', 'Java', 'Laravel', 'Codeigniter', 'HTML', 'CSS', 'Javascript', 'MySQL', 'Firebase', 'GIT'],
    techList: ['TDD'],
    link: '',
  },
  {
    title: 'Title 3',
    image: 'public/img/stock.jpg',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    stackList: ['Kotlin', 'Java', 'Laravel', 'Codeigniter', 'HTML', 'CSS', 'Javascript', 'MySQL', 'Firebase', 'GIT'],
    techList: ['TDD', 'CI/CD'],
    link: '',
  },
]

const products = [
  { id: 1, title: 'Coffee', image: 'public/img/stock.jpg', price: '250', qty: 0 },
  { id: 2, title: 'Coffee and snack', image: 'public/img/stock.jpg', price: '500', qty: 0 },
  { id: 3, title: 'Dinner', image: 'public/img/stock.jpg', price: '1000', qty: 0 },
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
