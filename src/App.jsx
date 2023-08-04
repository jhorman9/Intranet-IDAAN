import { Route, Routes } from 'react-router-dom'
import Login from './assets/pages/Login'
import './assets/styles/App.css'
import { Register } from './assets/pages/Register'

function App() {

  return (
    <>
      <div className='app'>
        <Routes >
          <Route path="/" element={<Login />}/>
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
