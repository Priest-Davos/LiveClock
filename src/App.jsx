
import './App.css'
import Title from './components/Title'
import ShowTime from './components/showTime'
import Moto from './components/moto'

function App() {

  // console.log(Time.current_time)

  return(

  <div className='app-container'>
    <Title/>
    <Moto/>
    <ShowTime/>
  
    </div>

      

  )

}

export default App
