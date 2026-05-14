import React from "react";

const InputLabel = ({ htmlFor ,children }) => {
    
    
    return (
        <>
            <label htmlFor={htmlFor} className="font-semibold  ">
                {children}
            </label>
        </>
    );
};

export default InputLabel;
