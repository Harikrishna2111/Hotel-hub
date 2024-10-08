import React from 'react'
import hotels from '../Hoteldata'
import Hotel from '../components/Hotel'

export default function HomeScreen() {
  return (
<div>
    <div className="row">
        {hotels.map(hotel=>{
        return <div className="col-md-4">
            <div style={{textAlign: 'center', width:'400px', marginLeft:'50px'}} className='shadow-lg p-3 mb-5 bg-body rounded'>
                <Hotel hotel={hotel}/>
            </div>
        </div>
})}
    </div>
</div>
)
}
