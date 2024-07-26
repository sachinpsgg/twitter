import axios from 'axios';
import { TweetsData } from '../types/types'
const API_URL = 'https://mocki.io/v1/f08eecb7-78be-42df-8af9-a14d95a7d48a';

export const fetchTweets = async (): Promise<TweetsData[]> => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

export const createTweet = async (tweetData: { content: string }): Promise<TweetsData> => {
  const response = await axios.post(`${API_URL}`, tweetData);
  return response.data;
};
