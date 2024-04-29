import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/cart'
import CheckoutItem from '../components/checkout/CheckoutItem'
import PaypalCheckout from '../components/checkout/PaypalCheckout'
import StickyTitle from '../components/StickyTitle'


const Checkout = () => {
  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.cart.items)
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount)

  const addItemHandler = ({ id, title, image, price }) => {
    dispatch(cartActions.addItem({ id, title, image, price }))
    dispatch(cartActions.getCartTotalAmount())
  }

  const removeItemHandler = ({ id, title, image, price }) => {
    dispatch(cartActions.removeItem({ id, title, image, price }))
    dispatch(cartActions.getCartTotalAmount())
  }

  const getItemQuantity = (item) => {
    const itemsStateObj = cartItems.find(cartItem => cartItem.id === item.id)
    return itemsStateObj !== undefined ? itemsStateObj.qty : 0
  }

  return (
    <div className='mx-6 text-white'>
      <StickyTitle title='Cart Checkout' />
      {
        cartItems.map((item, index) => {
          return <CheckoutItem
            className='mb-4 border-solid border-2 border-cyan-600 bg-cyan-600/10 text-slate-300'
            key={index}
            item={item}
            addItemHandler={() => addItemHandler(item)}
            removeItemHandler={() => removeItemHandler(item)}
            itemCountHandler={getItemQuantity(item)}
          />
        })
      }
      <div className='flex justify-between text-xl'>
        <span>TOTAL</span>
        <span>{cartTotalAmount}</span>
      </div>

      <PaypalCheckout className='my-16' amount={cartTotalAmount} />

    </div>
  )
}

export default Checkout