import React from 'react'

function NameList() {
  const names = ["Bruce", "Clark", "Diana", "Diana"]
  const emps = [

    {
        id:1,
        name:"Bruce Wayne",
        age:38
    }

  ]
  return (
    <div>
       { 
        names.map(name => <h2 key={name}>{name}</h2>)
       }
    </div>
  )
}

export default NameList