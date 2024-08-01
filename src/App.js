import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { Provider } from 'react-redux'
import { store } from './Store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <AppRoutes />
      </div>
    </Provider>
  )
}

export default App
