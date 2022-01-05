import React from 'react'

export const Input = ({
    className,
    label,
    type,
    value,
    required,
    onChange,
    name,
    inputClassName,
    labelClassName
}) => {
    return(
        <>
        <div className={className}>
                <label className={labelClassName ? labelClassName : 'form-label'} htmlFor={label}>
                    {label}
                </label>
                <input 
                type={type}
                className={inputClassName ? inputClassName : 'form-control'}
                id={label}
                value={value}
                onChange={onChange}
                name={name}
                required={required}
                />
        </div>
        </>
    )
}