/* eslint-disable react/prop-types */
import StickyTitle from '../StickyTitle.jsx'
import { ArrowUpRightIcon } from '@heroicons/react/16/solid'
import { useMediaQuery } from 'react-responsive'

const Experience = (props) => {
  const info = props.data

  const sm = useMediaQuery({ query: '(min-width: 640px)' })
  const md = useMediaQuery({ query: '(min-width: 768px)' })
  const lg = useMediaQuery({ query: '(min-width: 1024px)' })
  const xl = useMediaQuery({ query: '(min-width: 1280px)' })
  const xxl = useMediaQuery({ query: '(min-width: 1536px)' })


  const mobileComponents = <div className='mx-6'>
    <StickyTitle title="Experience" />
    <ul>
      {
        info.map((i, index) => {
          return <li key={index} className="mb-4 pb-4" >
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

  const smComponents = <div className='mx-6'>
    <StickyTitle title="Experience" />
    <ul>
      {
        info.map((i) => {
          return <li key={i.title} className="flex my-4  px-4 py-4" >
            <div className="flex-none text-slate-400 text-sm">{i.date}</div>
            <div className="flex-initial pl-16">
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

  const lgComponents = <div className='my-24 ml-2 lg:mr-20 xl:mr-40'>
    <StickyTitle title="Experience" className='lg:hidden' />
    <ul>
      {
        info.map((i) => {
          return <li key={i.title} className="grid grid-cols-3 my-4 py-4 px-4 group hover:pt-3.5 hover:bg-slate-500/10 hover:border-t-2 hover:border-double hover:border-slate-200/10 hover:rounded-lg" >
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


  // const lgComponents = <div className='my-20 ml-6 mr-24 xl:my-24 xl:ml-2 xl:mr-40'>
  //   <StickyTitle title="Experience" />
  //   <ul>
  //     {
  //       info.map((i) => {
  //         return <li key={i.title} className="grid grid-cols-3 my-4 xl:py-4 xl:px-4 hover:bg-cyan-900/20 rounded-lg" >
  //           <div className="text-slate-400 text-sm">{i.date}</div>
  //           <div className="col-span-2">
  //             <div className='flex group'>
  //               <a href='https://google.com' className="text-white text-base group-hover:text-teal-300">{i.company}</a>
  //               <span className='pl-1 text-white text-xs inline-block content-end group-hover:content-start group-hover:pl-2'>
  //                 <ArrowUpRightIcon className="h-5 w-5 text-white text-base group-hover:text-teal-300" />
  //               </span>
  //             </div>
  //             <div className="text-slate-400 text-sm">{i.title}</div>
  //             <div className="text-slate-400 text-sm mb-3">{i.position}</div>
  //             <div className="text-slate-400 text-sm mb-3 text-justify">{i.detail}</div>
  //             <ul className="flex flex-wrap">
  //               {i.skill.map((i2) => {
  //                 return <li key={i2.toString()} className="mr-2 my-1 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{i2}</li>
  //               })}
  //             </ul>
  //           </div>
  //         </li>
  //       })
  //     }
  //   </ul>
  // </div>



  return (
    <>
      {(sm && !lg) && smComponents}
      {(lg) && lgComponents}
      {(!sm && !md) && mobileComponents}
    </>
  )


}

export default Experience


// return (
//   <ul>
//     {
//       info.map((i) => {
//         return <li key={i.title} className="flex my-4 mr-24 px-4 py-4 hover:bg-cyan-900/20" >
//           <div className="flex-none text-slate-400 text-sm">{i.date}</div>
//           <div className="flex-initial pl-8">
//             <div className='flex group'>
//               <a href='https://google.com' className="text-white text-base group-hover:text-teal-300">{i.company}</a>
//               <span className='pl-1 text-white text-xs inline-block content-end group-hover:content-start group-hover:pl-2'>
//                 <ArrowUpRightIcon className="h-5 w-5 text-white text-base group-hover:text-teal-300" />
//               </span>
//             </div>
//             <div className="text-slate-400 text-sm">{i.title}</div>
//             <div className="text-slate-400 text-sm mb-3">{i.position}</div>
//             <div className="text-slate-400 text-sm mb-3">{i.detail}</div>
//             <ul className="flex flex-wrap">
//               {i.skill.map((i2) => {
//                 return <li key={i2.toString()} className="mr-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{i2}</li>
//               })}
//             </ul>
//           </div>
//         </li>
//       })
//     }
//   </ul>
// )


// return (
//   <div className='mx-6'>
//     <StickyTitle title="Experience" />
//     <ul>
//       {
//         info.map((i, index) => {
//           return <li key={index} className="mb-4 pb-4" >
//             <div className="py-2 text-slate-400 text-sm">{i.date}</div>
//             <div className='py-2 flex group'>
//               <a href='https://google.com' className="text-white text-base group-hover:text-teal-300">{i.company}</a>
//               <span className='pl-1 text-white text-xs inline-block content-end group-hover:content-start group-hover:pl-2'>
//                 <ArrowUpRightIcon className="h-5 w-5 text-white text-base group-hover:text-teal-300" />
//               </span>
//             </div>
//             <div className="text-slate-400 text-sm">{i.title}</div>
//             <div className="text-slate-400 text-sm mb-3">{i.position}</div>
//             <div className="text-slate-400 text-sm mb-3">{i.detail}</div>
//             <ul className="flex flex-wrap">
//               {i.skill.map((i2) => {
//                 return <li key={i2.toString()} className="mr-2 mb-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{i2}</li>
//               })}
//             </ul>
//           </li>
//         })
//       }
//     </ul>
//   </div>

// )








// return (
//   <div className='mx-6'>
//     <StickyTitle title="Experience" />
//     <ul>
//       {
//         info.map((i, index) => {
//           return <li key={index} className="mb-4 pb-4 sm:flex sm:mb-0 sm:my-4 sm:py-4" >
//             <div className="py-2 text-slate-400 text-sm sm:flex-none sm:mr-12">{i.date}</div>
//             <div className='hidden sm:block sm:flex-initial sm:pl-8'>
//               <div className='py-2 flex group'>
//                 <a href='https://google.com' className="text-white text-base group-hover:text-teal-300">{i.company}</a>
//                 <span className='pl-1 text-white text-xs inline-block content-end group-hover:content-start group-hover:pl-2'>
//                   <ArrowUpRightIcon className="h-5 w-5 text-white text-base group-hover:text-teal-300" />
//                 </span>
//               </div>
//               <div className="text-slate-400 text-sm">{i.title}</div>
//               <div className="text-slate-400 text-sm mb-3">{i.position}</div>
//               <div className="text-slate-400 text-sm mb-3">{i.detail}</div>
//               <ul className="flex flex-wrap">
//                 {i.skill.map((i2) => {
//                   return <li key={i2.toString()} className="mr-2 mb-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{i2}</li>
//                 })}
//               </ul>
//             </div>
//           </li>
//         })
//       }
//     </ul>
//   </div>

// )