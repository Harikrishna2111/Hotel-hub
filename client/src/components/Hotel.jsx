import React from 'react'

export default function Hotel({hotel}) {
  return (
    <div>
        
        <img src={hotel.img} className='img-fluid' style={{height : '200px', width : '200px'}}/>
        <h1 style={{fontSize: "30px", fontWeight: 'bold', marginTop: '20px'}}>{hotel.name}</h1>
        <h1>{hotel.location}</h1>
        <div>
          <p>Order Time</p>
          <p>{hotel.order_time}</p>
          <button type="button" class="btn btn-primary">Order Here !</button>

        </div>
    </div>
  )
}
