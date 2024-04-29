import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'

// eslint-disable-next-line react/prop-types
const PaypalCheckout = ({ amount, className }) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer()


  const onCreateOrder = (data, actions, amount) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
          },
        },
      ],
    })
  }

  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name
      alert(`Transaction completed by ${name}`)
    })
  }

  return (
    <div className={`checkout text-black ${className}`}>
      {isPending ? <p>LOADING...</p> :
        (
          <>
            <PayPalButtons
              style={{ layout: 'vertical', color: 'blue' }}
              createOrder={(data, actions) => onCreateOrder(data, actions, amount)}
              forceReRender={[amount]}
              onApprove={(data, actions) => onApproveOrder(data, actions)}
            />
          </>
        )
      }
    </div >
  )
}

export default PaypalCheckout