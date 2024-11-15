import { useLocation } from 'react-router-dom'
import * as C from './styled'

export const Header = () => {
  const location = useLocation()
  const pathname = location.pathname
  const shouldHide = pathname === '/login' || pathname === '/'

  return shouldHide ? null : <C.Header></C.Header>
}
