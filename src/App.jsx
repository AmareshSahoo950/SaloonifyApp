import React, {useState} from 'react'
import TimeSlotList from './TimeSlotList'
import HomeImage from './HomeImage'
import "./index.css"


const App = () => {
  let[homepage,setHomePage] = useState(false)
  let[count,setCount] =useState(0) 

  let handelhomepage= () => {
      setHomePage(!homepage)
  }

  return(
    <div>
      <header>
        <div className='logosection'>Saloonify Booking App</div>
        <div className='menusection'>
          <p onClick={handelhomepage}>Book your Slot</p>
          <p>Bookings <sup>{count}</sup></p>
        </div>
      </header>
        <main>

          {homepage?<TimeSlotList data = {{setHomePage,setCount,count}}/> :<HomeImage/>}

        </main>
        
    </div>
  )
}

export default App