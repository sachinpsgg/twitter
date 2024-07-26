import {useMutation, useQueryClient} from "@tanstack/react-query";
import {TweetsData} from "../types/types";
import {createTweet} from "../api";

export const useCreateTweet = () => {
    const queryClient = useQueryClient();
    return useMutation<TweetsData, Error,{ content: string }>({
        mutationFn: createTweet,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tweets'] });
        },
    });
};