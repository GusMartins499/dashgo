import { useQuery } from "react-query"
import { api } from "../api"

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

type ResponseUsers = {
  users: User[]
  total: number
}

export async function getUsers(page: number): Promise<ResponseUsers> {
  const { data, headers } = await api.get<Omit<ResponseUsers, 'total'>>('users', {
    params: {
      page
    }
  })
  const total = Number(headers['x-total-count'])
  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })
  return {
    users,
    total
  }
}

export function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10 // 5 minutos
  })
}