import { createContext, useContext } from "react";



export const Savepost = createContext({
    save: [],
    setSave: ()=>{}
})

export const Savepostprovider = Savepost.Provider;

export default function Usesavepost(){
return useContext(Savepost)
} 