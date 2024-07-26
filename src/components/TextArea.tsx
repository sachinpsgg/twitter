// src/components/TweetForm/TextArea.tsx
import React from 'react';
import { useFormContext } from 'react-hook-form';
import Label from "./Label";


interface TextAreaProps {
    id: string;
    placeholder: string;
}

const TextArea: React.FC<TextAreaProps> = ({ id, placeholder }) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="relative">
            <Label
                id={id}
                label="Tweet Content"
                required
                error={!!errors.content}
            />
            <textarea
                id={id}
                {...register(id, { required: 'Content is required' })}
                placeholder={placeholder}
                className={`w-full p-2 pr-16 border ${errors.content ? 'border-red-500' : 'border-gray-300'} bg-gray-950 text-white rounded relative`}
            />
            {errors.content && <p className="text-red-500">Unable to Post</p>}
        </div>
    );
};

export default TextArea;
