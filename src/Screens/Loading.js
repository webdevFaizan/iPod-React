import React from 'react'

export default function Loading() {
  return (               
    <div className='loading-screen'>
        <h1>Loading...</h1>
        <div className="loader">
            <img src="./img/loading.gif" width={150} alt="..." />
        </div>
        <div>Please be patient, songs are being loaded.</div>
    </div>
  )
}
