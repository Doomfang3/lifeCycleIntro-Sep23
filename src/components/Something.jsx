import { useEffect, useState } from 'react'

const Something = () => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    console.log('Mounting')
    const intervalId = setInterval(() => {
      console.log('tick')
      setTime(prevTime => prevTime + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return <h1>Time: {time}</h1>
}

export default Something
