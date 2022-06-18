import { useState } from "react";

export function useLocalStorage(key: string, initialValue: any) {
    const [storedValue, setStoredValue] = useState(() => {
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = (value: any) => {
        setStoredValue(value);
        sessionStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
}