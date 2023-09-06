import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext()


const AppProvider = ({children})=>{
    const ApiKey = `1200ce762fb4a15788c12d4a3e9290d5`
    const [query, setQuery] = useState('')
    const [searchButton, setSearchButton] = useState('mumbai')
    const [unit, setUnit] = useState('metric')
    const [apiData, setApiData] = useState([])
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchButton}&appid=${ApiKey}&units=${unit}`
    
    const callApi = async (url)=>{
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        setApiData(data)
    }

    useEffect(()=>{
        callApi(url)
    }, [searchButton, unit])
    


    return <AppContext.Provider value={{
        apiData, 
        query, 
        setQuery, 
        searchButton, 
        setSearchButton,
        unit,
        setUnit
    }}>{children}</AppContext.Provider>
}

const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}