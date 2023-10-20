import React from 'react'
import { USerConsumer } from './UseContext'

function ComponentE() {
  return (
    <div>
        <USerConsumer>
            {
                (user)=>{
                   return <h2>Hello {user}</h2>
                }
            }
        </USerConsumer>
    </div>
  )
}

export default ComponentE

//useRef
//useReducer
//useMemo
//useCallback