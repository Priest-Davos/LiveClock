function ShowTime() {
  // let current_time = Time.current_time
  let time = new Date();


  return (
    <p >--------------{time.toLocaleDateString()} - {time.toLocaleTimeString()}----------------</p>
  )
}
export default ShowTime