import * as C from './styled'

import { FaBed, FaRegCalendarAlt, FaRegCreditCard, FaGripHorizontal } from 'react-icons/fa'
import { IoSettings } from 'react-icons/io5'
import { IoMdPerson, IoMdExit } from 'react-icons/io'
import { FaUserLock } from 'react-icons/fa6'
import Logo from '../../assets/logo.webp'

export const Dashboard = () => {
  const url = window.location.pathname;

  return (
    <>
      {url !== '/login' && (
        <C.Dashboard>
          <div>
            <img src={Logo} alt="LOGO GHS" />
          </div>
          <nav>
            <a href="">
              <FaGripHorizontal fontSize={20} />
              Home
            </a>
            <a href="">
              <IoMdPerson fontSize={20} />
              Clientes
            </a>
            <a href="">
              <FaBed fontSize={20} />
              Acomodações
            </a>
            <a href="">
              <FaRegCalendarAlt fontSize={20} />
              Reservas
            </a>
            <a href="">
              <FaRegCreditCard fontSize={20} />
              Pagamentos
            </a>
            <a href="">
              <FaUserLock fontSize={20} />
              Administrador
            </a>
            <a href="">
              <IoSettings fontSize={25} />
              Configurações
            </a>
          </nav>
          <button>
            <IoMdExit />
            <span>Sair</span>
          </button>
        </C.Dashboard>
      )}
    </>
  )
}
