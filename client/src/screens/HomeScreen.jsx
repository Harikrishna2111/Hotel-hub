import React from 'react'
import hotels from '../Hoteldata'
import Hotel from '../components/Hotel'

export default function HomeScreen() {
  return (
<div>
    <div className="greet1" style={{fontSize:'xx-large',marginLeft:'20px'}}>Welcome to ...</div>
    <div className="greet2" style={{fontFamily: 'cursive',fontSize: "75px",marginLeft:'100px'}}>CRAVEO</div>
    <div className="row">
        {hotels.map(hotel=>{
        return <div className="col-md-4" style={{padding: '0px', width: '33.33%'}}>
            <div style={{textAlign: 'center', width:'300px', marginLeft:'50px'}} className='shadow-lg p-3 mb-5 bg-body rounded'>
                <Hotel hotel={hotel}/>
            </div>
        </div>
})}
    </div>
</div>
)
}
