import { createContext, useState } from 'react';

const Context = createContext()

export function ContextProvider({ children }) {
    const [userInfo, setUserInfo] = useState({})

    const addUser = (user) => {
        setUserInfo(user)
    }

    return (
        <Context.Provider value={{ userInfo, addUser }}>
            {children}
        </Context.Provider>
    )
}

export default Context