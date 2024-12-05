import * as C from '../styled'
import { FaSave, FaIdCard } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

export const ModalAdmin = ({onClose}) => {
  return (
    <C.Context>
      <C.Filter></C.Filter>
      <C.Box>
        <C.BoxTop>
          <FaIdCard fontSize={18} />
          <span>Funcionário</span>
          <IoMdClose color="#ff0000" id="closeModal" onClick={onClose} />
        </C.BoxTop>
        <C.Form>
          <label htmlFor="fullName">Nome Completo</label>
          <input type="text" id="fullName" required />
          <label htmlFor="dateOfBirth">Data de Nascimento</label>
          <input type="text" id="dateOfBirth" required />
          <label htmlFor="role">Função</label>
          <select name="" id="">
            <option value="Funcionario">Funcionário</option>
            <option value="Administrador">Administrador</option>
          </select>
          <div className="inputGroup">
            <div className="inputGroutItem">
              <label htmlFor="Login">Login</label>
              <input type="text" id="Login" disabled />
            </div>
            <div className="inputGroutItem">
              <label htmlFor="password">Senha</label>
              <input type="text" id="password" required disabled />
            </div>
          </div>
          <div className="btnArea">
            <button onClick={null}>
              <FaSave />
              <span>Atualizar</span>
            </button>
          </div>
        </C.Form>
      </C.Box>
    </C.Context>
  )
}
