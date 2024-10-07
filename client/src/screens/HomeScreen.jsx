import React from 'react'
import hotels from '../Hoteldata'
import Hotel from '../components/Hotel'

export default function HomeScreen() {
  return (
<div>
    <div className="row">
        {hotels.map(hotel=>{
        return <div className="col-md-4">
            <div>
                <Hotel hotel={hotel}/>
            </div>
        </div>
})}
    </div>
</div>
)
}
