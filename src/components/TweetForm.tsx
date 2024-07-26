import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCreateTweet } from '../hooks/userCreateTweet';
import ButtonGroup from "./Buttons/ButtonGroup";
import Button from '@mui/material/Button';
import Spinner from "./Spinner";
import Form from "./Form";
import TextArea from "./TextArea";

interface FormValues {
    content: string;
}

const TweetForm: React.FC = () => {
    const { register, reset, formState: { errors }, watch } = useForm<FormValues>();
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
        <Form onSubmit={onSubmit}>
            <TextArea
                id="content"
                register={register}
                error={!!errors.content}
                placeholder="What's happening?"
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
            {errors.content && <p className="text-red-500">{errors.content.message}</p>}
            {mutation.isError && <div className="text-red-500">Error: Unable to Post tweet</div>}
        </Form>
    );
};

export default TweetForm;
