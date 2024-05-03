import { useDispatch, useSelector } from 'react-redux'
import { tableContentsActions } from '../../store/tableContents'

const info = [
  'About',
  'Experience',
  'Projects',
  'Products',
]

// eslint-disable-next-line react/prop-types
const TableContents = ({ className }) => {
  const active = useSelector((state) => state.tableContents.active)
  const dispatch = useDispatch()

  const onClickHandler = (value) => {
    window.location.href = `#${value}`
    dispatch(tableContentsActions.chooseContent(value))
  }

  return (
    <div className={`${className}`}>
      <ul className="">
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