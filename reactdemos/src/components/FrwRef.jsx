import React from 'react'

// function FrwRef() {
//   return (
//     <div>
//         <input type="text"></input>
//     </div>
//   )
// }

const FrwRef = React.forwardRef((props, ref)=>{
   return (
    <div>
        <input type="text" ref={ref}></input>
    </div>
    )
})

export default FrwRef