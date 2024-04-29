import { useDispatch, useSelector } from 'react-redux'
import { tableContentsActions } from '../../store/tableContents'

const info = [
  'About',
  'Experience',
  'Projects',
  '',
]

// eslint-disable-next-line react/prop-types
const TableContents = ({ className }) => {
  const active = useSelector((state) => state.tableContents.active)
  const dispatch = useDispatch()

  const onClickHandler = (value) => {
    dispatch(tableContentsActions.chooseContent(value))
  }

  return (
    <div className={`${className}`}>
      <ul className="my-24 mx-8 lg:my-24 lg:mx-24 xl:ml-44">
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

// return (
//   <div className={`${className}`}>
//     <ul className="my-24 mx-40">
//       {info.map((i) => {
//         return <li key={i.toString()} className={'mb-3 ' + (active === i ? 'text-teal-300' : 'text-slate-400')}>
//           <button onClick={() => onClickHandler(i)}>{i}</button>
//         </li>
//       })}
//     </ul>
//   </div>
// )