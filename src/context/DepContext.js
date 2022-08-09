import { createContext, useContext } from "react";

const DepContext = createContext({})

export function useDeps() {
    return useContext(DepContext)
}

export function DepProvider({children, services}){
    return(
        <DepContext.Provider value={services}>
            {children}
        </DepContext.Provider>
    )
}