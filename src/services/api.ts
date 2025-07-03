import axios from "axios";
import type { User, Post } from "../types";

//URL api Jsonplaceholder
const API_BASE_URL = "https://jsonplaceholder.typicode.com";

//fetch users
export async function fetchUsers(): Promise<User[]> {
  const { data } = await axios.get<User[]>(`${API_BASE_URL}/users`);
  return data;
}

//fetch posts
export async function fetchPostsByUser(userId: number): Promise<Post[]> {
  const { data } = await axios.get<Post[]>(`${API_BASE_URL}/posts`, {
    params: { userId },
  });
  return data;
}
