import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './icon-brain.png'


const Logo=()=>
{
return(
   <div className='ma4 nt0'>
       <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 80, width: 80 }} >
       <div className="Tilt-inner pa3">
           <img style={{paddingTop:'2px'}}src={brain} alt='logo'/>
      </div>
       </Tilt>
   </div>
)
}

export default Logo