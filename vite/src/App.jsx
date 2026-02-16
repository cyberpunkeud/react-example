import { useState } from 'react'
import KitchenSinkExample from './carte'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
     <KitchenSinkExample></KitchenSinkExample>
     <KitchenSinkExample></KitchenSinkExample>
     <KitchenSinkExample></KitchenSinkExample>
     </div>
    </>
  )
}

export default App
