import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from "./pages/Home"
import CreateGame from "./pages/CreateGame"
import './App.css'




function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<CreateGame />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
