import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
interface FormValues {
    content: string;
}

const Form: React.FC<{ onSubmit: SubmitHandler<FormValues>, children: React.ReactNode }> = ({ onSubmit, children }) => {
    const { handleSubmit } = useForm<FormValues>();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="relative">
            {children}
        </form>
    );
};
export default Form;