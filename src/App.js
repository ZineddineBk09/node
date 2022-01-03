import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Checkout from './components/Checkout'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={[<Header />, <Home />]} />
          <Route path='/checkout' element={[<Header />, <Checkout />]} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
