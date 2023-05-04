import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
    // key : "dogs_data"
    // defaultValue : {
    //  step:1
    // }
    const [value, setValue] = useState(() => {

        let currentValue;

        try {
            currentValue = JSON.parse(
                localStorage.getItem(key) || String(defaultValue)
            );
        } catch (error) {
            currentValue = defaultValue;
        }

        return currentValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
};

export default useLocalStorage;

