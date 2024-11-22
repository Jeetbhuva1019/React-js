import React, { createContext, useState } from 'react';
export const UserData = createContext();


export default function User({ children }) {
    const [user, setUser] = useState();

    return (
        <UserData.Provider value={{ user, setUser }}>
            {children}
        </UserData.Provider>
    );
}
