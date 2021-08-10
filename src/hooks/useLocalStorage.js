import { useState } from "react";
//create first custom hook
const useLocalStorage = (key, initialValue) =>
{   //setting initial state to a function
    const [storedValue, setStoredValue] = useState(() => {
        //get key from local storage 
        const item = window.localStorage.getItem(key);
        //parse and return json or if nothing there return initial value

        return item ? JSON.parse(item) : initialValue;
        //setter function

    });
    const setValue = (value) => {
        //set state
        setStoredValue(value);
        //set item in window
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setValue]

}


export default useLocalStorage;