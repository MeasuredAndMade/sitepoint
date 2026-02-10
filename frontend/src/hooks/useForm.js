import { useState } from 'react'

export function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    function handleChange(e) {
        const {name, value, type, multiple, selectedOptions} = e.target;

        // Handle multi-select
        if (multiple) {
            const selected = Array.from(selectedOptions).map((opt) => opt.value);
            setValues((prev) => ({ ...prev, [name]: selected }));
            return
        }

        // Handle all other inputs
        setValues((prev) => ({ ...prev, [name]: value }));
    }

    return { values, setValues, handleChange };
}