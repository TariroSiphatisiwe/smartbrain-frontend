import React from "react";

const Rank=({name,entries})=>{
    return(
    <div className='pa2'>
         <div className='white f3'>
         {`${name},your current entry is...`}
         </div>
         <div className='white f1'>
         {entries}
         </div>
    </div>
    )
}

export default Rank 