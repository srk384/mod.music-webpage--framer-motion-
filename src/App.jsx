import { useState } from 'react'
import Home from './Home'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-[80vh] sm:min-h-screen bg-[#0036C2] relative'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
