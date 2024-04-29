import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import store from './store/index'
import App from '@/App'
import '@/assets/main.css'



const initialOptions = {
  'client-id': 'AZqqiK3XwigCr8530Tv7vdOCQYG1QF3tXZbA4B9_g212MmHx-jP47tnhQAzRYabFiZgPwyKOq0vd8UAz',
  currency: 'PHP',
  intent: 'capture',
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PayPalScriptProvider options={initialOptions}>
      <App />
    </PayPalScriptProvider>
  </Provider>,
)