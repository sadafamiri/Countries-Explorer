import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[countries,setCountries] = useState([])
  const[loading,setLoading] = useState(false)
  const[error,setError] =useState(null)
  const[search,setSearch] =useState("")
  const[region,setRegion] = useState("all")
  const trimmedText = search.trim();
  useEffect(()=>{
    if(!trimemdText){
      return;
    }

    // if()
    const controller = new AbortController();
      async function fetchCountries(){
        
      }
  },[trimmedText])
  return (
    <div>

    </div>
      
  )
}

export default App
