import * as C from './styled'

import { FaBed, FaRegCalendarAlt, FaRegCreditCard, FaGripHorizontal } from 'react-icons/fa'
import { IoSettings } from 'react-icons/io5'
import { IoMdPerson, IoMdExit } from 'react-icons/io'
import { FaUserLock } from 'react-icons/fa6'
import Logo from '../../assets/logo.webp'
import { useLocation } from 'react-router-dom'

export const Dashboard = () => {

  const location = useLocation();
  const pathname = location.pathname;
  const shouldHide = pathname === '/login' || pathname === '/'

  return shouldHide ? null : (
    <C.Dashboard>
      <div>
        <img src={Logo} alt="LOGO GHS" />
      </div>
      <nav>
        <a href="/home">
          <FaGripHorizontal fontSize={20} />
          Home
        </a>
        <a href="/customers">
          <IoMdPerson fontSize={20} />
          Clientes
        </a>
        <a href="/accommodations">
          <FaBed fontSize={20} />
          Acomodações
        </a>
        <a href="/reservations">
          <FaRegCalendarAlt fontSize={20} />
          Reservas
        </a>
        <a href="/payments">
          <FaRegCreditCard fontSize={20} />
          Pagamentos
        </a>
        <a href="/admin">
          <FaUserLock fontSize={20} />
          Administrador
        </a>
        <a href="/settings">
          <IoSettings fontSize={25} />
          Configurações
        </a>
      </nav>
      <button>
        <IoMdExit />
        <span>Sair</span>
      </button>
    </C.Dashboard>
  )
}
