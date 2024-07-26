import React from 'react';
import { useTweets } from '../hooks/useTweets';
import Tweet from './Tweet';
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import {Tweet as TweetType, TweetsData, User} from '../types/types'
import ScrollableContainer from "./ScrollableContainer";

const TweetList: React.FC = () => {
    const { data, isLoading, isError } = useTweets();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner size={50} />
            </div>
        );
    }

    if (isError) {
        return <ErrorMessage message="Unable to Fetch tweets." />
    }

    const tweetsData = data as unknown as TweetsData;
    const { tweets, users } = tweetsData;
    const userMap = users.reduce((acc: Record<string, User>, user: User) => {
        acc[user.id] = user;
        return acc;
    }, {});

    return (
        <ScrollableContainer className="bg-gray-950 overflow-y-auto h-full scroll-m-0">
            {tweets.map((tweet: TweetType) => {
                const user = userMap[tweet.authorId];
                return (
                    <Tweet
                        key={tweet.id}
                        tweet={tweet}
                        user={user}
                    />
                );
            })}
        </ScrollableContainer>
    );
};

export default TweetList;
