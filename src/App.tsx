import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes/Routes'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes />
      </div>
    </BrowserRouter>
  )
}

export default App
