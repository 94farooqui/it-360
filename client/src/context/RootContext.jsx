import { createContext, useState } from "react";

export const RootContext = createContext(null)

 const RootContextProvider = ({children}) => {
    const [currentTicket,setCurrentTicket] = useState(null)

    const value = {
        currentTicket,
        setCurrentTicket
    }

    return <RootContext.Provider value={value}>
        {children}
    </RootContext.Provider>
}

export default RootContextProvider