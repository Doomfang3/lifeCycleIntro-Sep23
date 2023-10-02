import { useEffect, useState } from 'react'
import './App.css'
import Something from './components/Something'
import LatestLaunch from './components/LatestLaunch'

function App() {
  const [count, setCount] = useState(0)
  const [isSelected, setIsSelected] = useState(false)

  /*  useEffect(() => {
    console.log('Effects')
  }) */

  useEffect(() => {
    console.log('Mounting')
  }, [])

  /*   useEffect(() => {
    if (count % 2 === 0) {
      console.log(count)
    }
  }, [count]) */

  /* useEffect(() => {
    console.log({ count })
  }, [isSelected]) */

  return (
    <>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <label>
          Terms of Service
          <input
            type='checkbox'
            checked={isSelected}
            onChange={event => setIsSelected(event.target.checked)}
          />
        </label>
        {isSelected && <Something />}
      </div>
      <LatestLaunch />
    </>
  )
}

export default App
