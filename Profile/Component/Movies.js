import React from 'react'
import { useParams } from 'react-router-dom'


function Movies() {
    const { desc,trailer } = useParams()

  return (
    <div>{desc}
    <a href={trailer}>click me to watch</a>
    
    </div>
  )
}

export default Movies