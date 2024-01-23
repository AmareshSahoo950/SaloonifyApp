import React, {useState} from 'react'
import UserForm from "./UserForm"

const TimeSlotList = (props) => {
  let{setCount,count}=props.data 
    let [selectslot,setSelectSlot]=useState(false)
    const timeSlots = [
      {id: 1, time: '10:00 AM', date:'2024-01-20', available:true},
      {id: 2, time: '02:30 PM', date:'2024-01-20', available:false},
      {id: 3, time: '10:30 AM', date:'2024-01-20', available:true},
      {id: 4, time: '02:45 PM', date:'2024-01-20', available:false},
      {id: 5, time: '10:45 AM', date:'2024-01-20', available:true},
      {id: 6, time: '04:00 PM', date:'2024-01-20', available:false},
      {id: 7, time: '09:00 AM', date:'2024-01-20', available:true},
      {id: 8, time: '06:00 PM', date:'2024-01-20', available:false},
      {id: 9, time: '04:00 PM', date:'2024-01-20', available:true},
    
      //Add more time slots as needed .
    ];
    let [slotdata,setSlotData]= useState(timeSlots)
    //console.log(props.data.setHomePage);

    let handelSlotClick=(slot)=>{
      if(slot.available){
        console.log("you can book");
        console.log(slot);
        setSelectSlot(true)
      }
      else{
        console.log("already Booked");
      }
    }
    let handelpopup=()=>{
      setSelectSlot(false)
    }

    return(
      <div className="slots">
         <button onClick={()=>{props.data.setHomePage(false)}}>Close</button>
         <ul>
        {slotdata.map((slot)=>(

         <li key={slot.id} className={slot.available?"available":"booked"} onClick={()=>{handelSlotClick(slot)}}>
            {slot.time} - {slot.date} ({slot.available? 'Available' : 'Booked'})
         </li>
          ))}
        </ul>
        {selectslot? <div id='popup_box'>
              <UserForm data={{handelpopup,setSlotData,slotdata,setCount,count}}/>
              </div>:""}
      </div>
    )
}
export default TimeSlotList