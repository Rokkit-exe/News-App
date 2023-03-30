import React from 'react'

function MainContainer({children}) {
  return (
    <div className='full-height bg-dark bg-gradient d-flex flex-column justify-content-between'>
        {children}
    </div>
  )
}

export default MainContainer