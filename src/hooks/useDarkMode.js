import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key) => {
    const [storedValue, setValue] = useLocalStorage(key)
    return [storedValue, setValue]
}