import React,{createContext , useState} from 'react'

const context = createContext();

const DefaultCode = () => {

    const str1 = "const fun = (data) => {\n"
    const str2 = "  // your code comes here\n"
    const str3 = "}"

    return str1+str2+str3;
}

const Data = ({children}) => {
    
    const [code , setCode] = useState(DefaultCode());
    const [input , setInput] = useState("");
    
    return (
        <context.Provider value={{
            code: [code , setCode],
            input: [input , setInput]
        }}
        >{children}</context.Provider>
    )
}

export {context , Data , DefaultCode}