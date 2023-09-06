import React from 'react'
import { useGlobalContext } from '../context/data'

const TopButtons = () => {

    const cities = [
        {
            id:1,
            title:'London'
        },
        {
            id:2,
            title:'Sydney'
        },
        {
            id:3,
            title:'Tokyo'
        },
        {
            id:4,
            title:'Toron'
        },
        {
            id:5,
            title:'Paris'
        }
    ]

    const {handleCityButton} = useGlobalContext()
    

  return (
    <>
      <div className='flex items-center justify-around my-6'>
        {
            cities.map((item)=>{
                return (
                    <button key={item.id} onClick={handleCityButton} className='text-white cursor-pointer text-lg font-medium'>{item.title}</button>
                )
            })
        }
      </div>
    </>
  )
}

export default TopButtons
