import { useEffect, useState } from "react"

function ShowTime() {

  // create a useState for time
  const [currentTime, setCurrentTime] = useState(new Date())

  // create a useEfect
  useEffect(() => {

    // console.log("Interval has been setup")
   
    const intervalId = setInterval(() => { setCurrentTime(new Date()) }, 1000); //setInterval take two arg, first-> method, second->time

    return () => {
      clearInterval(intervalId);  // Cleanup function to stop the interval when the component unmounts
      // console.log("Cancelled the interval")
    }
  }, []
  )


  return (
    <p >--------------{currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}----------------</p>
  )
}
export default ShowTime