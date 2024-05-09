import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { tableContentsActions } from '../../store/tableContents'

const info = [
  'About',
  'Experience',
  'Projects',
  // 'Products',
]


// eslint-disable-next-line react/prop-types
const TableContents = ({ className }) => {
  const active = useSelector((state) => state.tableContents.active)
  const isManuallyScrolling = useSelector((state) => state.tableContents.isManuallyScrolling)

  const dispatch = useDispatch()
  const location = useLocation()

  const [isAboutIntersecting, setIsAboutIntersecting] = useState(false)
  const [isExperienceIntersecting, setIsExperienceIntersecting] = useState(false)
  const [isProjectsIntersecting, setProjectsIsIntersecting] = useState(false)


  // Scrolling intersecting effect
  useEffect(() => {
    const aboutElement = document.querySelectorAll('#About')
    const experienceElement = document.querySelectorAll('#Experience')
    const projectsElement = document.querySelectorAll('#Projects')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.target.id === 'About') {
          setIsAboutIntersecting(entry.isIntersecting)
        }

        if (entry.target.id === 'Experience') {
          setIsExperienceIntersecting(entry.isIntersecting)
        }

        if (entry.target.id === 'Projects') {
          setProjectsIsIntersecting(entry.isIntersecting)
        }
      },
      { rootMargin: '-300px' },
    )

    observer.observe(aboutElement[0])
    observer.observe(experienceElement[0])
    observer.observe(projectsElement[0])

    return () => observer.disconnect()
  }, [])

  // Scrolling intersecting effect
  useEffect(() => {

    if (isManuallyScrolling && (isAboutIntersecting && !isExperienceIntersecting)) {
      window.location.href = `#${info[0]}`
    } else if (isManuallyScrolling && (isExperienceIntersecting && !isProjectsIntersecting)) {
      dispatch(tableContentsActions.chooseContent(info[1]))
      window.location.href = `#${info[1]}`
    } else if (isManuallyScrolling && (isProjectsIntersecting && !isExperienceIntersecting)) {
      dispatch(tableContentsActions.chooseContent(info[2]))
      window.location.href = `#${info[2]}`
    }

  }, [isAboutIntersecting, isExperienceIntersecting, isProjectsIntersecting])

  // checks typed # in url
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      const sStr = location.hash.substring(1, location.hash.length)

      // checks if new hash in url is available in menu, 
      // if not, puts back to default
      if (info.includes(sStr)) {
        dispatch(tableContentsActions.chooseContent(sStr))

        element?.scrollIntoView({
          behavior: 'smooth',
        })
      } else {
        defaultUrlMenu()
      }

    }
  }, [location])

  useEffect(() => {
    const sStr = location.hash.substring(1, location.hash.length)

    // Default value for menu and hash in url
    if (!info.includes(sStr)) {
      defaultUrlMenu()
    }

  }, [active])

  const onClickHandler = (value) => {
    window.location.href = `#${value}`
    setIsManuallyScrollingFalse()
    dispatch(tableContentsActions.chooseContent(value))
  }

  const setIsManuallyScrollingFalse = () => {
    dispatch(tableContentsActions.setIsManuallyScrolling(false))
  }

  const defaultUrlMenu = () => {
    setIsManuallyScrollingFalse()
    window.location.href = `#${info[0]}`
  }

  return (
    <div className={`${className}`}>
      <ul>
        {info.map((i) => {
          return <li key={i.toString()} className={'mb-3 ' + (active === i ? 'text-teal-300' : 'text-slate-400')}>
            <button onClick={() => onClickHandler(i)}>{i}</button>
          </li>
        })}
      </ul>
    </div>
  )
}

export default TableContents