import React, { useState } from 'react'
export const ContextValue = React.createContext()

const Context = (props) => {
  
    const [data,setData] = useState([])
    const[showFilter,setShowFilter] = useState(false)
      return (
       <ContextValue.Provider value={{
        data,
        setData,
        showFilter,
        setShowFilter
       }}>
        {
        props.children
        }
       </ContextValue.Provider>
      )
    }
    
    export default Context