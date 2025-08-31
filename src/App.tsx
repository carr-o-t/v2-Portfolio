import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
