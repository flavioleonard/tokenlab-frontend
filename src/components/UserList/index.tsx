import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { listUsers, User } from '../../services/userService';

const UserList: React.FC = () => {
  const { data: users, isLoading, error } = useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: listUsers,
  });

  if (isLoading) return <p>Carregando usuários...</p>;
  if (error) return <p>Erro ao carregar usuários: {error.message}</p>;

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users?.map(user => (
          <li key={user.id}>
            {user.username} - {user.events.length} eventos
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
