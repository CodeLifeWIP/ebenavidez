import { useEffect } from 'react'
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
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      const sStr = location.hash.substring(1, location.hash.length)
      dispatch(tableContentsActions.chooseContent(sStr))

      element?.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }, [location])

  useEffect(() => {

    if (info.includes(active) && location.hash) {

      const element = document.querySelector(location.hash)
      const sStr = location.hash.substring(1, location.hash.length)
      dispatch(tableContentsActions.chooseContent(sStr))

      element?.scrollIntoView({
        behavior: 'smooth',
      })

    } else {

      dispatch(tableContentsActions.chooseContent(info[0]))

    }


  }, [active])

  const onClickHandler = (value) => {
    window.location.href = `#${value}`
    dispatch(tableContentsActions.chooseContent(value))
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