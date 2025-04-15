import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Feedback } from './pages/Feedback'
import { Admin } from './pages/Admin'
function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Feedback/>}/>
    <Route path='/admin' element={<Admin/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
