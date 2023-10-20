import React, {useEffect, useState} from 'react'

function HookMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('Mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(()=>{
    console.log('UseEffect called')
    window.addEventListener("mousemove", logMousePosition);

    return ()=>{
        console.log(`Component Unmounting`)
        window.removeEventListener('mousemove', logMousePosition)
    }
  })

  return (
    <div>
        <h1>{x}, {y}</h1>
    </div>
  )
}

export default HookMouse