import * as C from '../styled'
import { FaSave , FaIdCard } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { MdDelete } from "react-icons/md";

export const ModalCustomer = ({ onClose }) => {
  return (
    <C.Context>
      <C.Filter></C.Filter>
      <C.Box>
        <C.BoxTop>
          <FaIdCard fontSize={18} />
          <span>Cliente</span>
          <IoMdClose color="#ff0000" id="closeModal" onClick={onClose} />
        </C.BoxTop>
        <C.Form>
          <label htmlFor="fullName">Nome Completo</label>
          <input type="text" id="fullName" required />
          <label htmlFor="cpf">CPF</label>
          <input type="text" id="cpf" required />
          <div className="inputGroup">
            <div className="inputGroutItem">
              <label htmlFor="phone">Telefone - Celular</label>
              <input type="text" id="phone" disabled />
            </div>
            <div className="inputGroutItem">
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" required disabled />
            </div>
          </div>
          <div className="inputGroup">
            <div className="inputGroutItem">
              <label htmlFor="state">Estado</label>
              <select name="states" id="states">
                <option value=""></option>
              </select>
            </div>
            <div className="inputGroutItem">
              <label htmlFor="password">Cidade</label>
              <select name="cities" id="cities">
                <option value=""></option>
              </select>
            </div>
          </div>
          <div className="btnArea">
            <button onClick={null} style={{backgroundColor:"#ff0000", marginRight: "10px"}}>
            <MdDelete />
              <span>Deletar</span>
            </button>
            <button onClick={null}>
              <FaSave />
              <span>Cadastrar</span>
            </button>
          </div>
        </C.Form>
      </C.Box>
    </C.Context>
  )
}
