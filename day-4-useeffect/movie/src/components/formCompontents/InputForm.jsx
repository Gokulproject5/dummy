import React from 'react'

const InputForm = ({
    name,
    placeholder,
    type = "text",
    value,
    onChange,
    required = true,

}) => {

    return (
        <>
            <input
                name={name}
                type={type}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                title={value}
                className='bg-gray-300  outline-0 px-2  py-1 capitalize placeholder:lowercase' />
        </>
    )
}

export default InputForm