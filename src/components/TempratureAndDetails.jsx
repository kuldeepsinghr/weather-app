import React from 'react'
import {UilTemperature, UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons'
import { useGlobalContext } from '../context/data'

const TempratureAndDetails = () => {
  const {apiData} = useGlobalContext()
  return (
    <>
      <div className='text-xl flex items-center justify-center py-6 text-cyan-300'>
        <p>{apiData?.weather?.[0]?.description}</p>
      </div>

      <div className='flex items-center justify-between flex-row text-white py-3'>
        <img src={`http://openweathermap.org/img/wn/${apiData?.weather?.[0]?.icon}@2x.png`} alt="img" className='w-20' />
        <p className='text-5xl'>{`${apiData?.main?.temp}°`}</p>
        <div className='flex flex-col space-y-2'>

            <div className='flex font-light text-sm items-center justify-center gap-1'>
                <UilTemperature size={18} /> Real fell: <span className='font-medium'>{`${apiData?.main?.feels_like}°`}</span>
            </div>

            <div className='flex font-light text-sm items-center justify-center gap-1'>
                <UilTear size={18} /> Humidity: <span className='font-medium'>{`${apiData?.main?.humidity}%`}</span>
            </div>

            <div className='flex font-light text-sm items-center justify-center gap-1'>
                <UilWind size={18} /> Wind Speed: <span className='font-medium'>{`${apiData?.wind?.speed}`}</span>
            </div>

        </div>
      </div>

      <div className='flex flex-row items-center justify-center text-white text-sm py-3 space-x-2'>

        <UilSun/>
        <p className='font-light'>Rise: <span className='font-medium ml-1'>{`${apiData?.sys?.sunrise}`}</span></p>
        <p className='font-light'>|</p>

        <UilSunset/>
        <p className='font-light'>Set: <span className='font-medium ml-1'>{`${apiData?.sys?.sunset}`}</span></p>
        <p className='font-light'>|</p>

        <UilSun/>
        <p className='font-light'>High: <span className='font-medium ml-1'>{`${apiData?.main?.temp_max}°`}</span></p>
        <p className='font-light'>|</p>

        <UilSun/>
        <p className='font-light'>Low: <span className='font-medium ml-1'>{`${apiData?.main?.temp_min}°`}</span></p>
        <p className='font-light'>|</p>

      </div>
    </>
  )
}

export default TempratureAndDetails
