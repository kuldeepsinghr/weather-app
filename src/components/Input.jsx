import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import { useGlobalContext } from '../context/data'

const Input = () => {
  const {query, setQuery, setSearchButton, setUnit} = useGlobalContext()
  const handleOnChange = (e)=>{
    setQuery(e.target.value)
  }
  const handleSearch = ()=>{
    setSearchButton(query)
    setQuery('')
  }
  const celcius = ()=>{
    setUnit('metric')
  }
  const feranait = ()=>{
    setUnit('imperial')
  }
  return (
    <>
      <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center gap-4'>
            <input type="text" className='text-xl font-light p-2 w-full shadow-xl focus:outline-none' placeholder='search for city...'
            value={query}
            onChange={handleOnChange}/>
            <button onClick={handleSearch}><UilSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' /></button>
            <UilLocationPoint size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'/>
        </div>
        <div className='flex flex-row items-center justify-center w-1/4'>
            <button className='text-xl text-white font-light' onClick={celcius}>°C</button>
            <p className='text-xl text-white mx-1'>|</p>
            <button className='text-xl text-white font-light' onClick={feranait}>°F</button>
        </div>
      </div>
    </>
  )
}

export default Input
