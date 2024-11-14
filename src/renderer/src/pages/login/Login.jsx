import { useState } from 'react'
import * as C from './styled'
import Logo from '../../assets/logo.webp'

function Login() {
  const [message, setMessage] = useState(false)
  return (
    <C.Container>
      <C.Box>
        <C.Logo>
            <h1>GHS</h1>
          <p>Sistema de Gestão Hotelaria Simplicada </p>
        </C.Logo>
        <C.Result>{message && <span>Usuário não cadastrado</span>}</C.Result>
        <C.Form>
          <input type="text" placeholder="Login" />
          <input type="text" placeholder="Senha" />
          <button>Acessar</button>
        </C.Form>
        <C.Copywriting>
            <p>            Desenvolvido por 
            </p>
            <a href="www.abraaowendel.tech">abraaowendel.tech</a>
        </C.Copywriting>
      </C.Box>
    </C.Container>
  )
}

export default Login
