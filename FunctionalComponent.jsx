import React , {useState} from 'react'

function FunctionalComp() {
    const [name,setName] = useState("Kuldeep");

  return (
    <div>Functional Component
        <h3>{name}</h3>
        <button onClick={()=>setName()}>{name}</button>
    </div>
  )
}

export default FunctionalComp