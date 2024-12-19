import api from './api';

export interface User {
  id: string;
  username: string;
  password?: string;
  events: Event[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
}

export const createUser = async (username: string, password: string) => {
  const response = await api.post<User[]>('/users', { username, password });
  return response.data;
};

export const listUsers = async () => {
  const response = await api.get<User[]>('/users');
  console.log("Meu response data: " + JSON.stringify(response));
  return response.data;
};

export const getUser = async (userId: string) => {
  const response = await api.get<User>(`/users/${userId}`);
  return response.data;
};

export const updateUser = async (userId: string, username: string) => {
  const response = await api.patch<User>(`/users/${userId}`, { username });
  return response.data;
};

export const deleteUser = async (userId: string) => {
  await api.delete(`/users/${userId}`);
};

export const createEvent = async (
  userId: string,
  title: string,
  description: string,
  startTime: string,
  endTime: string
) => {
  const response = await api.post<Event>(`/users/${userId}/events`, {
    title,
    description,
    startTime,
    endTime,
  });
  return response.data;
};

export const listUserEvents = async (userId: string) => {
  const response = await api.get<Event[]>(`/users/${userId}/events`);
  return response.data;
};
