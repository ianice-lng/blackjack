import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from "./pages/Home"
import CreateGame from "./pages/CreateGame"
import Game from './pages/Game'
import './App.css'




function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<CreateGame />} />
      <Route path='/game/:id' element={<Game />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
