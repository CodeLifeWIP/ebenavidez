/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { StickyTitleCart } from '../StickyTitle'
import ItemCounter from '../checkout/ItemCounter'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store/cart'
import { useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'


const Products = (props) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount)
  const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity)

  const info = props.data
  const totalValue = useRef(0)

  const sm = useMediaQuery({ query: '(min-width: 640px)' })
  const md = useMediaQuery({ query: '(min-width: 768px)' })
  const lg = useMediaQuery({ query: '(min-width: 1024px)' })
  const xl = useMediaQuery({ query: '(min-width: 1280px)' })
  const xxl = useMediaQuery({ query: '(min-width: 1536px)' })

  useEffect(() => {
    console.log(`sm: ${sm}`)
    console.log(`md: ${md}`)
    console.log(`lg: ${lg}`)

  }, [])

  useEffect(() => {
    totalValue.current = cartTotalAmount
  }, [cartTotalAmount, cartTotalQuantity])

  const addItemHandler = ({ id, title, image, price }) => {
    dispatch(cartActions.addItem({ id, title, image, price }))
    dispatch(cartActions.getCartTotalAmount())
    dispatch(cartActions.getCartTotalQty())
  }

  const removeItemHandler = ({ id, title, image, price }) => {
    dispatch(cartActions.removeItem({ id, title, image, price }))
    dispatch(cartActions.getCartTotalAmount())
    dispatch(cartActions.getCartTotalQty())
  }

  const getItemQuantity = (item) => {
    const itemsStateObj = cartItems.find(cartItem => cartItem.id === item.id)
    return itemsStateObj !== undefined ? itemsStateObj.qty : 0
  }

  const checkoutButton = <Link to='/checkout' className='flex justify-center pl-2 lg:pl-0 xl:pl-0 lg:mt-10 lg:mb-40 xl:mb-40 xl:mt-10'>
    <button type="button" className=" sm:mt-2 text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2">
      <svg className="w-4 h-4 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
      Continue
    </button>
  </Link>

  const titelBarDefault = <StickyTitleCart title='Products' cartTotal={cartTotalQuantity} />

  const titelBarWithCheckout = <StickyTitleCart title='Products' cartTotal={cartTotalQuantity} checkoutButton={checkoutButton} />

  return (
    <div className={`mx-6 text-white lg:my-24 lg:ml-6 lg:mr-24 xl:my-24 xl:ml-2 xl:mr-44 ${props.className}`}>
      {((cartTotalQuantity && sm) && (!lg && !xl)) ? titelBarWithCheckout : titelBarDefault}

      <ul className='text-white mb-16 sm:flex sm:mb-0 sm:my-4 sm:py-4 '>
        {info.map((i, index) =>
          <li key={index}
            className={'my-8 px-8 py-6 sm:px-4 sm:py-4 md:mt-0 md:mb-8 md:px-8 md:py-6 lg:mx-0 lg:my-0 group hover:bg-cyan-900/20 rounded'}
          >
            <img className='my-4' src={i.image} alt={'Image of ' + i.title} />

            <ItemCounter
              addItemHandler={() => addItemHandler(i)}
              removeItemHandler={() => removeItemHandler(i)}
              itemCountHandler={getItemQuantity(i)}
            />

            <div className='flex justify-center'>{i.title} for P {i.price}</div>
          </li>,
        )}
      </ul>

      {
        ((cartTotalQuantity && !sm) || (lg || xl)) > 0 ? checkoutButton : null
      }

    </div>
  )
}

export default Products