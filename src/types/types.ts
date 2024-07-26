export interface User {
    id: string;
    username: string;
    name: string;
    avatarUrl: string;
    bio: string;
    createdAt: string;
}

export interface Tweet {
    id: string;
    content: string;
    authorId: string;
    createdAt: string;
    likesCount: number;
    commentsCount: number;
    retweetsCount: number;
}

export interface TweetsData {
    tweets: Tweet[];
    users: User[];
}
