import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { store, persistor } from 'store'
import { LoginPage, ConsolePage } from 'containers'

function App () {
  console.count('App')
  return (
    <Router>
      <Provider store={store}>
        <PersistGate
          loading={null} persistor={persistor}>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/console' element={<ConsolePage />} />
          </Routes>
        </PersistGate>
      </Provider>
    </Router>
  )
}

export default App
