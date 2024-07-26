// src/components/TweetForm/Form.tsx
import React from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { FormValues } from './TweetForm';

interface FormProps {
    onSubmit: SubmitHandler<FormValues>;
    children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
    const methods = useForm<FormValues>();

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="relative">
                {children}
            </form>
        </FormProvider>
    );
};

export default Form;
