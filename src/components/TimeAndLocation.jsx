import React from 'react'
import { useGlobalContext } from '../context/data'

const TimeAndLocation = () => {
  const {apiData} = useGlobalContext()
  return (
    <>
      <div className='flex items-center justify-center my-6'>
        <p className='text-white text-xl font-extralight'>Tuesday, 31 May 2023 | Local time: 12:46 PM</p>
      </div>

      <div className='flex items-center justify-center my-6'>
        <p className='text-white text-xl font-medium'>{`${apiData?.name}, ${apiData?.sys?.country}`}</p>
      </div>
    </>
  )
}

export default TimeAndLocation
