import React from "react";
import InputLabel from "./InputLabel";
import InputForm from "./InputForm";

const InputGroup = ({
    label,
    name,
    placeholder,
    type,
    value,
    required = true,
    onChange,
}) => {
    return (
        <>
            <div className="bg-gray-100 px-2 py-1 flex flex-col w-full ">
                <InputLabel htmlFor={name}>{label}</InputLabel>
                <InputForm
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            </div>
        </>
    );
};

export default InputGroup;
