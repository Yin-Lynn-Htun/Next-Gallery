import { createContext, useState } from 'react'

export const AlertContext = createContext()

const AlertContextProvider = ({ children }) => {
    const [alerts, setAlerts] = useState([])

    const handleAddAlert = (message, type) => {
        const id = alert.length + 1
        setAlerts([...alerts, { id, message, type }])

        setTimeout(() => {
            setAlerts(alerts.filter((alert) => alert.id !== id))
        }, 5000)
    }

    return (
        <AlertContext.Provider value={{ alerts, handleAddAlert }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContextProvider
