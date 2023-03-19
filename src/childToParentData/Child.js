import React from 'react'

const Child = ({data}) => {
  return (
    <div>
        <input onChange={data} />
    </div>
  )
}

export default Child