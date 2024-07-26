import { clsx } from 'clsx';
import React from 'react';

interface Props {
    id?: string;
    className?: string;
    label?: string;
    required?: boolean;
    error?: boolean;
    floatingLabel?: boolean;
}

export default function Label({
                                  id,
                                  className,
                                  label,
                                  required,
                                  floatingLabel = false,
                                  error,
                              }: Props) {
    const classes = clsx(
        {
            'flex items-center text-base text-white': !floatingLabel,
            'absolute bg-white z-10 top-0 ml-3 px-1 text-gray-400 text-xs': floatingLabel,
            'text-red-500': error,
        },
        className,
    );

    return (
        <label className={classes} htmlFor={id}>
            {label}
            {required ? <sup className="text-red-500">*</sup> : null}
        </label>
    );
}
