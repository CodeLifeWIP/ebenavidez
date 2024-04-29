import { useState, useEffect } from 'react'
import Hero from '../components/home/Hero'
import TableContents from '../components/home/TableContents'
import { useSelector } from 'react-redux'
import About from '../components/home/About'
import Experience from '../components/home/Experience'
import Project from '../components/home/Project'
import Products from '../components/home/Products'
import Footer from '../components/home/Footer'



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
  const active = useSelector((state) => state.tableContents.active)
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount)
  // const secondaryCursor = useRef(null)


  useEffect(() => {
    // console.log(`state.active: ${active}`)
  }, [active])

  useEffect(() => {
    // console.log(`cart: ${JSON.stringify(cartTotalAmount)}`)
  }, [cartTotalAmount])

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

  useEffect(() => {
    // secondaryCursor.current.style.transform = `translate3d(${mousePos.x - 200}px, ${mousePos.y}px, 0)`
  }, [mousePos])

  return (
    <div className='bg-slate-900 lg:flex lg:justify-between lg:h-screen lg:overflow-y-hidden lg:w-full lg:grid lg:grid-cols-2'>
      <div className="">
        <Hero />
        <TableContents className='hidden lg:block' />
      </div>
      <div className="lg:h-screen lg:overflow-y-auto">
        <About />
        <Experience data={experiences} />
        <Project data={projects} />
        <Products data={products} className='hidden lg:block' />
        <Footer className='hidden lg:block' />
      </div>
      <Products data={products} className='block lg:hidden' />
      <Footer className='block lg:hidden' />

    </div>
  )
}

export default Home

// return (
//   <div className='bg-slate-900 flex justify-between h-screen overflow-y-hidden w-full grid grid-cols-2'>
//     {/* <div ref={secondaryCursor} className='w-36 h-36 bg-blue-500 blur-extra float-start' />
//       <div ref={secondaryCursor} className='w-36 h-36 bg-indigo-600 blur-extra float-start' /> */}
//     <div className="">
//       <Hero />
//       <TableContents />
//     </div>
//     <div className="h-screen overflow-y-auto">
//       <About />
//       <Experience info={experiences} />
//     </div>
//   </div>
// )