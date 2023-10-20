import React, {useEffect, useState} from 'react'

function UseEffcteDemo() {
  const[count, setCount] = useState(0)
  const[name, setName] = useState('')

  //didUpdate+didMount
  useEffect(()=>{
    console.log(`useEffect - Updating document title`)
    document.title = `You clicked ${count} times`
  },[count])

  return (
    <div>
        <input type="text"
        value={name}
        onChange={e=>setName(e.target.value)}/>
        <button onClick={()=>{setCount(count + 1)}}>Count: {count}</button>
    </div>
  )
}

export default UseEffcteDemo