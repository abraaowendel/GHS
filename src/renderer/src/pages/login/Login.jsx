import ChangeTitle from '../../utils/changeTitle'
import * as C from './styled'
import { useEffect, useState } from 'react'

function Login() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    ChangeTitle('Login')
  }, []);

  const [login, setLogin] = useState({
    user: '',
    password: ''
  })

  const handleUserChange = (event) => {
    setLogin({ ...login, user: event.target.value })
  }

  const handlePasswordChange = (event) => {
    setLogin({ ...login, password: event.target.value })
  }
  const handleLogin = (event) => {
    event.preventDefault()

    if (login.user == 'admin' && login.password == 'admin') {
      window.location.href = '/home';
      return
    }

    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
    }, 1000)
  }

  return (
    <C.Container>
      <C.Box>
        <C.Logo>
          <h1>GHS</h1>
          <p>Sistema de Gestão Hotelaria Simplicada </p>
        </C.Logo>
        <C.Result>{showMessage && <span>Usuário ou Senha incorretos</span>}</C.Result>
        <C.Form onSubmit={handleLogin}>
          <input
            type="text"
            onChange={handleUserChange}
            value={login.user}
            placeholder="Login"
            required
          />
          <input
            type="password"
            onChange={handlePasswordChange}
            value={login.password}
            placeholder="Senha"
            required
          />
          <button onSubmit={handleLogin}>
            Entrar
          </button>
        </C.Form>
        <C.Copywriting>
          <p> Desenvolvido por</p>
          <a href="www.abraaowendel.tech">abraaowendel.tech</a>
        </C.Copywriting>
      </C.Box>
    </C.Container>
  )
}

export default Login
