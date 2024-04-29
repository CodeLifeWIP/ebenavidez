/* eslint-disable react/prop-types */
import { useEffect } from 'react'

// eslint-disable-next-line react/prop-types
const StickyTitle = ({ className, title }) => {
  return (
    <div className={`sticky h-14 my-8 top-0 bg-slate-900/90 flex ${className}`}>
      <span className="text-white text-xl inline-block content-center">{title}</span>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
const StickyTitleWithCart = ({ className, title, cartTotal, checkoutButton }) => {

  useEffect(() => {
    console.log(`StickyTitleWithCart: ${cartTotal}`)
  }, [])

  useEffect(() => {
    console.log(`StickyTitleWithCart: ${cartTotal}`)
  }, [cartTotal])

  return (
    <div className={`sticky h-14 my-8 top-0 bg-slate-900/90 flex justify-between ${className}`}>
      <span className="text-white text-xl inline-block content-center">{title}</span>
      <div className="flex">
        <div className="inline-block content-center space-x-2">
          <span className="text-white text-xl">Cart</span>
          <span className="px-2 py-1 text-black text-xl bg-slate-100 rounded">{cartTotal}</span>
        </div>
        {checkoutButton}
      </div>
    </div>
  )
}

export const StickyTitleCart = StickyTitleWithCart
export default StickyTitle
