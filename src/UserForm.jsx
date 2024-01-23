import React,{useState} from "react"

const UserForm = (props) => {
  let [data,setData]=useState({
    username:"",
    emailid:"",
    number: ""
  })

  let{username,emailid,number}=data
  let handelsubmit=(e)=>{
    e.preventDefault()
    setData({
      username:"",
      emailid:"",
      number:""
    })

    setTimeout(()=>{
      confirm("confirm the booking")
      props.data.handelpopup()
      props.data.setCount(props.data.count+1)
    },100)

  }
  let handelchange=(e)=>{
    let{name,value}=e.target
    setData({...props.data.data,[name]:value})

  }

  return(
    <div className="userform">
      <form action="" onSubmit={handelsubmit}>
         <h2>Booking Form</h2>
         <p onClick={props.data.handelpopup}>close</p>

         <div className="form_section">
          <div className="input_box">
            <label htmlFor="username">Name :</label>
            <input type="text" id="username" placeholder="please enter your name" name='username' value={username} onChange={handelchange} />
          </div>
          
          <div className="input_box">
            <label htmlFor="email">Email Id:</label>
            <input type="email" id="email" placeholder="please enter your Email Id" name='emailid' value={emailid} onChange={handelchange} />
          </div>

          <div className="input_box">
            <label htmlFor="number">Number :</label>
            <input type="tel" id="number" placeholder="please enter your Number" name='number' value={number} onChange={handelchange} />
          </div>

          <div className="input_box">
              <button className="booking_button">Book Appointment</button>
          </div>
         </div>

      </form>
    </div>
  )
}

export default UserForm