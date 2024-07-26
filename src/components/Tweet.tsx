import React from 'react';
import Label from "./Label";
import Flex from "./FlexContainer";

interface TweetProps {
    tweet: {
        id: string;
        content: string;
        authorId: string;
        createdAt: string;
        likesCount: number;
        commentsCount: number;
        retweetsCount: number;
    };
    user: {
        id: string;
        username: string;
        name: string;
        avatarUrl: string;
        bio: string;
        createdAt: string;
    };
}

const Tweet: React.FC<TweetProps> = ({ tweet, user }) => {
    return (
        <div className="bg-black border border-gray-200 rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center mb-2">
                <div className="w-12 h-12 bg-gray-950 rounded-full mr-3 flex items-center justify-center">

                </div>
                <div>
                    <Label label={user.name}/>
                    <p className="text-sm text-white">@{user.username}</p>
                </div>
            </div>
            <p className="text-white mb-2">{tweet.content}</p>
            <p className="text-xs text-white">{new Date(tweet.createdAt).toLocaleString()}</p>
             <Flex className="gap-3 text-white items-center justify-between">
                    <span>{tweet.likesCount} Likes</span>
                    <span>{tweet.commentsCount} Comments</span>
                    <span>{tweet.retweetsCount} Retweets</span>
             </Flex>
        </div>
    );
};

export default Tweet;
