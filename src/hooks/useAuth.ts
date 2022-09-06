import { useTypedSelector } from 'src/hooks/useTypedSelector'

export const useAuth = () => {
  const token = useTypedSelector((state) => state.user.token)

  return { isAuth: token }
}
