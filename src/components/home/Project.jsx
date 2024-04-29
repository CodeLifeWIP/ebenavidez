/* eslint-disable react/prop-types */
import StickyTitle from '../StickyTitle.jsx'
import { ArrowUpRightIcon } from '@heroicons/react/16/solid'
import { useMediaQuery } from 'react-responsive'

const Project = (props) => {
  const info = props.data

  const sm = useMediaQuery({ query: '(min-width: 640px)' })
  const md = useMediaQuery({ query: '(min-width: 768px)' })
  const lg = useMediaQuery({ query: '(min-width: 1024px)' })
  const xl = useMediaQuery({ query: '(min-width: 1280px)' })
  const xxl = useMediaQuery({ query: '(min-width: 1536px)' })


  const mobileComponents = <div className='mx-6'>
    <StickyTitle title="Project" />
    <ul>
      {
        info.map((i) => {
          return <li key={i.title} className="mb-4 pb-4 xl:hover:bg-cyan-900/20" >
            <img src={i.image} alt={'image of ' + i.title} />
            <div className='py-2 flex group'>
              <a href='https://google.com' className="text-white text-base group-hover:text-teal-300">{i.title}</a>
              <span className='pl-1 text-white text-xs inline-block content-end group-hover:content-start group-hover:pl-2'>
                <ArrowUpRightIcon className="h-5 w-5 text-white text-base group-hover:text-teal-300" />
              </span>
            </div>
            <div className="text-slate-400 text-sm mb-3">{i.detail}</div>
            <ul className="flex flex-wrap">
              {i.stackList.map((i2) => {
                return <li key={i2.toString()} className="mr-2 mb-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{i2}</li>
              })}
            </ul>
            <ul className="flex flex-wrap">
              {i.techList.map((i2) => {
                return <li key={i2.toString()} className="mr-2 mb-2 flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium leading-5 text-amber-300">{i2}</li>
              })}
            </ul>
          </li>
        })
      }
    </ul>
  </div>

  const smComponents = <div className='mx-6'>
    <StickyTitle title="Project" />
    <ul>
      {
        info.map((i) => {
          return <li key={i.title} className="mb-4 pb-4 xl:hover:bg-cyan-900/20 sm:flex sm:mb-0 sm:my-4 sm:py-4" >
            <img className='sm:flex-none sm:object-scale-down sm:h-28' src={i.image} alt={'image of ' + i.title} />
            <div className='sm:block sm:flex-initial sm:pl-8'>
              <div className='py-2 flex group sm:py-0 sm:pb-1'>
                <a href='https://google.com' className="text-white text-base group-hover:text-teal-300">{i.title}</a>
                <span className='pl-1 text-white text-xs inline-block content-end group-hover:content-start group-hover:pl-2'>
                  <ArrowUpRightIcon className="h-5 w-5 text-white text-base group-hover:text-teal-300" />
                </span>
              </div>
              <div className="text-slate-400 text-sm mb-3">{i.detail}</div>
              <ul className="flex flex-wrap">
                {i.stackList.map((i2) => {
                  return <li key={i2.toString()} className="mr-2 mb-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{i2}</li>
                })}
              </ul>
              <ul className="flex flex-wrap">
                {i.techList.map((i2) => {
                  return <li key={i2.toString()} className="mr-2 mb-2 flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium leading-5 text-amber-300">{i2}</li>
                })}
              </ul>
            </div>
          </li>
        })
      }
    </ul>
  </div>

  const mdComponents = <div className='mx-6'>
    <StickyTitle title="Project" />
    <ul>
      {
        info.map((i) => {
          return <li key={i.title} className="md:flex md:my-4 md:py-4" >
            <img className='md:flex-none md:object-scale-down md:h-52' src={i.image} alt={'image of ' + i.title} />
            <div className='md:block md:flex-initial md:pl-8'>
              <div className='py-2 flex group md:py-0 md:pb-1'>
                <a href='https://google.com' className="text-white text-base group-hover:text-teal-300">{i.title}</a>
                <span className='pl-1 text-white text-xs inline-block content-end group-hover:content-start group-hover:pl-2'>
                  <ArrowUpRightIcon className="h-5 w-5 text-white text-base group-hover:text-teal-300" />
                </span>
              </div>
              <div className="text-slate-400 text-sm mb-3">{i.detail}</div>
              <ul className="flex flex-wrap">
                {i.stackList.map((i2) => {
                  return <li key={i2.toString()} className="mr-2 mb-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{i2}</li>
                })}
              </ul>
              <ul className="flex flex-wrap">
                {i.techList.map((i2) => {
                  return <li key={i2.toString()} className="mr-2 mb-2 flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium leading-5 text-amber-300">{i2}</li>
                })}
              </ul>
            </div>
          </li>
        })
      }
    </ul>
  </div>

  const lgComponents = <div className='my-24 ml-6 mr-20 xl:my-24 xl:ml-2 xl:mr-40'>
    <StickyTitle title="Project" className='lg:hidden' />
    <ul>
      {
        info.map((i) => {
          return <li key={i.title} className="grid grid-cols-3 my-4 py-4 px-4 group hover:pt-3.5 hover:bg-slate-500/10 hover:border-t-2 hover:border-double hover:border-slate-200/10 hover:rounded-lg" >
            <img className='object-scale-down' src={i.image} alt={'image of ' + i.title} />
            <div className='col-span-2 flex-initial pl-4'>
              <div className='py-2 flex md:py-0 md:pb-1'>
                <a href='https://google.com' className="text-white text-base group-hover:text-teal-300">{i.title}</a>
                <span className='pl-1 text-white text-xs inline-block content-end group-hover:content-start group-hover:pl-2'>
                  <ArrowUpRightIcon className="h-5 w-5 text-white text-base group-hover:text-teal-300" />
                </span>
              </div>
              <div className="text-slate-400 text-sm mb-3 text-justify">{i.detail}</div>
              <ul className="flex flex-wrap">
                {i.stackList.map((i2) => {
                  return <li key={i2.toString()} className="mr-2 mb-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{i2}</li>
                })}
              </ul>
              <ul className="flex flex-wrap">
                {i.techList.map((i2) => {
                  return <li key={i2.toString()} className="mr-2 mb-2 flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium leading-5 text-amber-300">{i2}</li>
                })}
              </ul>
            </div>
          </li>
        })
      }
    </ul>
  </div>


  return (
    <>
      {(sm && !md && !lg) && smComponents}
      {(md && !lg) && mdComponents}
      {(lg) && lgComponents}

      {(!sm && !md && !lg) && mobileComponents}
    </>
  )
}

export default Project