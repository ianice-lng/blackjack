import { Route, Routes, BrowserRouter } from 'react-router-dom'
import CreateGame from "./pages/CreateGame"
import Game from './pages/Game'
import './App.css'




function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<CreateGame />} />
      <Route path='/game/:id' element={<Game />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
