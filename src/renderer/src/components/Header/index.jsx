import * as C from './styled'

export const Header = () => {
  const url = window.location.pathname;
  return <>{url !== '/login' && <C.Header></C.Header>}</>
}
