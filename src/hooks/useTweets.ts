import { useQuery} from '@tanstack/react-query';
import { fetchTweets } from '../api';
import {TweetsData} from "../types/types";

export const useTweets = () => {
    return useQuery<TweetsData[], Error>({
        queryKey: ['tweets'],
        queryFn: fetchTweets,
        staleTime: 2000,
    });
};

