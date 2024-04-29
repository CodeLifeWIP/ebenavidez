/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/prop-types */

const CheckoutItem = ({ item, className }) => {

  return (
    <div className={`grid grid-cols-7 ${className}`}>
      <div className='col-span-2'>
        <img src={item.image} alt={`image of ${item.title}`} />
      </div>
      <div className='col-span-2 pt-2 pl-4'>
        <span>{item.title}</span>
      </div>
      <div className='col-span-2 pt-2'>
        <span>{item.price}</span>
        <span> x </span>
        <span>{item.qty}</span>
      </div>
      <div className='flex justify-center pt-2 pr-4'>
        <span>P{item.price * item.qty}</span>
      </div>
    </div>
  )
}

export default CheckoutItem