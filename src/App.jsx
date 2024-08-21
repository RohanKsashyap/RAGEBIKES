import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ul class="nav-ul"><li>HOME</li>
     <li>COURSES</li>
     <li>SERVICES</li>
     <li>ABOUT</li></ul>
    </>
  )
}

export default App
