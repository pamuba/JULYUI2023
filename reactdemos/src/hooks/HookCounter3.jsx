import React, {useState} from 'react'

function HookCounter3() {
  const [name, setName] = useState({firstName:'',lastName:''})
  return (
    <div>
        <input value={name.firstName}
        onChange={e => setName({...name, firstName:e.target.value})} 
        type="text"/>

        <input value={name.lastName}
        onChange={e => setName({...name, lastName:e.target.value})} 
        type="text"/>

        <h2>First Name is: {name.firstName}</h2>
        <h2>Last Name is: {name.lastName}</h2>
    </div>
  )
}

export default HookCounter3