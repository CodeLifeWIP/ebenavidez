/* eslint-disable react/prop-types */
import StickyTitle from '../StickyTitle.jsx'
import { ArrowUpRightIcon } from '@heroicons/react/16/solid'
import { useMediaQuery } from 'react-responsive'

const Experience = ({ data, className }) => {
  const info = data

  const sm = useMediaQuery({ query: '(min-width: 640px)' })
  const md = useMediaQuery({ query: '(min-width: 768px)' })
  const lg = useMediaQuery({ query: '(min-width: 1024px)' })
  const xl = useMediaQuery({ query: '(min-width: 1280px)' })
  const xxl = useMediaQuery({ query: '(min-width: 1536px)' })


  const mobileComponents = <div id='Experience' className={className}>
    <StickyTitle title="Experience" />
    <ul>
      {
        info.map((i, index) => {
          return <li key={i.title + index} className="mb-4 pb-4" >
            <div className="py-2 text-slate-400 text-sm">{i.date}</div>
            <div className='py-2 flex group'>
              <a href='https://google.com' className="text-white text-base group-hover:text-teal-300">{i.company}</a>
              <span className='pl-1 text-white text-xs inline-block content-end group-hover:content-start group-hover:pl-2'>
                <ArrowUpRightIcon className="h-5 w-5 text-white text-base group-hover:text-teal-300" />
              </span>
            </div>
            <div className="text-slate-400 text-sm">{i.title}</div>
            <div className="text-slate-400 text-sm mb-3">{i.position}</div>
            <div className="text-slate-400 text-sm mb-3">{i.detail}</div>
            <ul className="flex flex-wrap">
              {i.skill.map((i2) => {
                return <li key={i2.toString()} className="mr-2 mb-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{i2}</li>
              })}
            </ul>
          </li>
        })
      }
    </ul>
  </div>

  const smComponents = <div id='Experience' className={className}>
    <StickyTitle title="Experience" />
    <ul>
      {
        info.map((i, index) => {
          return <li key={i.title + index} className="grid grid-cols-4 my-8" >
            <div className="text-slate-400 text-sm">{i.date}</div>
            <div className="col-span-3">
              <div className='flex group'>
                <a href='https://google.com' className="text-white text-base group-hover:text-teal-300">{i.company}</a>
                <span className='pl-1 text-white text-xs inline-block content-end group-hover:content-start group-hover:pl-2'>
                  <ArrowUpRightIcon className="h-5 w-5 text-white text-base group-hover:text-teal-300" />
                </span>
              </div>
              <div className="text-slate-400 text-sm">{i.title}</div>
              <div className="text-slate-400 text-sm mb-3">{i.position}</div>
              <div className="text-slate-400 text-sm mb-3">{i.detail}</div>
              <ul className="flex flex-wrap">
                {i.skill.map((i2) => {
                  return <li key={i2.toString()} className="mr-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{i2}</li>
                })}
              </ul>
            </div>
          </li>
        })
      }
    </ul>
  </div>

  const lgComponents = <div id='Experience' className={className}>
    <StickyTitle title="Experience" className='lg:hidden' />
    <ul>
      {
        info.map((i, index) => {
          return <li key={i.title + index} className="grid grid-cols-3 mb-4 py-4 px-4 group hover:pt-3.5 hover:bg-slate-500/10 hover:border-t-2 hover:border-double hover:border-slate-200/10 hover:rounded-lg" >
            <div className="text-slate-400 text-sm">{i.date}</div>
            <div className="col-span-2">
              <div className='flex'>
                <a href='https://google.com' className="text-white text-base group-hover:text-teal-300">{i.company}</a>
                <span className='pl-1 text-white text-xs inline-block content-end group-hover:content-start group-hover:pl-2'>
                  <ArrowUpRightIcon className="h-5 w-5 text-white text-base group-hover:text-teal-300" />
                </span>
              </div>
              <div className="text-slate-400 text-sm">{i.title}</div>
              <div className="text-slate-400 text-sm mb-3">{i.position}</div>
              <div className="text-slate-400 text-sm mb-3 text-justify">{i.detail}</div>
              <ul className="flex flex-wrap">
                {i.skill.map((i2) => {
                  return <li key={i2.toString()} className="mr-2 my-1 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{i2}</li>
                })}
              </ul>
            </div>
          </li>
        })
      }
    </ul>
  </div>

  const xlComponents = <div id='Experience' className={className}>
    <StickyTitle title="Experience" className='xl:hidden' />
    <ul>
      {
        info.map((i, index) => {
          return <li key={i.title + index} className='grid grid-cols-3 mb-4 py-4 px-4 group hover:pt-3.5 hover:bg-slate-500/10 hover:border-t-2 hover:border-double hover:border-slate-200/10 hover:rounded-lg' >
            <div className="text-slate-400 text-sm">{i.date}</div>
            <div className="col-span-2">
              <div className='flex'>
                <a href='https://google.com' className="text-white text-base group-hover:text-teal-300">{i.company}</a>
                <span className='pl-1 text-white text-xs inline-block content-end group-hover:content-start group-hover:pl-2'>
                  <ArrowUpRightIcon className="h-5 w-5 text-white text-base group-hover:text-teal-300" />
                </span>
              </div>
              <div className="text-slate-400 text-sm">{i.title}</div>
              <div className="text-slate-400 text-sm mb-3">{i.position}</div>
              <div className="text-slate-400 text-sm mb-3 text-justify">{i.detail}</div>
              <ul className="flex flex-wrap">
                {i.skill.map((i2) => {
                  return <li key={i2.toString()} className="mr-2 my-1 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{i2}</li>
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
      {(sm && !lg) && smComponents}
      {(lg && !xl) && lgComponents}
      {(xl) && xlComponents}
      {(!sm && !md && !lg && !xl) && mobileComponents}
    </>
  )


}

export default Experience