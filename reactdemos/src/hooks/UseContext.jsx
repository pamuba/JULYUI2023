import React from 'react'

const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const USerConsumer = UserContext.Consumer

export {UserProvider, USerConsumer}