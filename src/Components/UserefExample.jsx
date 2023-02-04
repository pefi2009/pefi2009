import { useEffect } from 'react'
import { useState } from 'react'
import CostomeHook from './CostomeHook'

const UserefExample = () => {
 //const [loading,setLoading] = useState (true)
 const [error,setError] = useState (null)
 const [data,setdata] = useState ([])
 useEffect(()=>{
  const fetchData = async () =>{
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts',{})
      const kamal = await response.json()
      setdata(kamal)
 
    } catch (error) {
      setError(error)
    }
  }
      fetchData()
 },[])
 
 return (
   <div>
     {data.map((p)=>(
       <CostomeHook kimia={p}></CostomeHook>
     ))}
   </div>
 )
}


export default UserefExample
