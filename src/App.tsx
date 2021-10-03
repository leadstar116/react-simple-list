import { createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes/Routes'

const App: React.FC = () => {
  const newTheme = createTheme()

  return (
    <BrowserRouter>
      <ThemeProvider theme={newTheme}>
        <div className="app-container">
          <Routes />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
