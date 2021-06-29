import { useState, useEffect } from 'react'

export const useLocalStorage = (key, initVal) => {
    const initialData = () => {
        let val = window.localStorage.getItem(key)
        return val? JSON.parse(val) : initVal
    }
    const [value, setValue] = useState(initialData)

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
        // eslint-disable-next-line
    }, [value])
    return [value, setValue]
}