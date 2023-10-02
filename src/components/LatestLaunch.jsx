import { useEffect, useState } from 'react'

const LatestLaunch = () => {
  const [launch, setLaunch] = useState()

  const fetchLatestLaunch = async () => {
    const response = await fetch('https://api.spacexdata.com/v4/launches/latest')
    const launchData = await response.json()
    console.log(launchData)
    setLaunch(launchData)
  }

  useEffect(() => {
    fetchLatestLaunch()
  }, [])

  return launch ? (
    <>
      <h2>Latest SpaceX Launch</h2>
      <p>{launch.id}</p>
      <p>Flight Number: {launch.flight_number}</p>
      <p>{launch.success ? 'Success !!!!' : 'Maybe next time !'}</p>
    </>
  ) : (
    <h1>Loading....</h1>
  )
}

export default LatestLaunch
