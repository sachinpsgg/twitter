import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCreateTweet } from '../hooks/userCreateTweet';
import ButtonGroup from "./Buttons/ButtonGroup";
import Button from '@mui/material/Button';
import Spinner from "./Spinner";
import Label from "./Label";

interface FormValues {
    content: string;
}

const TweetForm: React.FC = () => {
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm<FormValues>();
    const mutation = useCreateTweet();
    const content = watch('content');

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        mutation.mutate(data, {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <div className="relative">
                <Label
                    id="tweet-content"
                    label="Tweet Content"
                    required
                    error={!!errors.content}
                />
                <textarea
                    id="tweet-content"
                    {...register('content', { required: 'Content is required' })}
                    placeholder="What's happening?"
                    className={`w-full p-2 pr-16 border ${errors.content ? 'border-red-500' : 'border-gray-300'} bg-gray-950 text-white rounded relative`}
                />
                <div className="absolute right-2 bottom-2">
                    <ButtonGroup variant="contained" orientation="horizontal" size="medium">
                        <Button
                            type="submit"
                            disabled={!content || mutation.isPending}
                            className={`${(!content || mutation.isPending) ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'} text-white px-4 py-2 rounded`}
                        >
                            {mutation.isPending ? <Spinner size={20} /> : 'Post'}
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
            {errors.content && <p className="text-red-500">{errors.content.message}</p>}
            {mutation.isError && <div className="text-red-500">Error: Unable to Post tweet</div>}
        </form>
    );
};

export default TweetForm;
