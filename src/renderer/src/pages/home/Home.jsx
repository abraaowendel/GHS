import * as C from './styled'
import {
  FaUsers,
  FaDoorOpen,
  FaDoorClosed,
  FaRegCalendarAlt,
  FaMoneyCheckAlt
} from 'react-icons/fa'
import { FaHouseChimneyWindow, FaUserTag } from 'react-icons/fa6'
import { PiHouseLineBold } from 'react-icons/pi'
import { IoPricetag } from 'react-icons/io5'
import { HiUsers } from 'react-icons/hi2'
import { BsFillHouseHeartFill, BsHouseAddFill } from 'react-icons/bs'

function Home() {
  return (
    <C.Container className="base">
      <C.InfoBox>
        <C.Box>
          <C.BoxLeft backgroundColor="#169CB2">
            <FaUsers fontSize={35} color="#fff" />
          </C.BoxLeft>
          <C.BoxRight>
            <p>Hospedes</p>
            <h3>{0} atualmente</h3>
          </C.BoxRight>
        </C.Box>
        <C.Box>
          <C.BoxLeft backgroundColor="#198754">
            <FaHouseChimneyWindow fontSize={35} color="#fff" />
          </C.BoxLeft>
          <C.BoxRight>
            <p>Acomodações</p>
            <h3>{0} disponíveis</h3>
          </C.BoxRight>
        </C.Box>
        <C.Box>
          <C.BoxLeft backgroundColor="#3498DB">
            <FaDoorOpen fontSize={35} color="#fff" />
          </C.BoxLeft>
          <C.BoxRight>
            <p>Check-in realizados</p>
            <h3>{0} hoje</h3>
          </C.BoxRight>
        </C.Box>
        <C.Box>
          <C.BoxLeft backgroundColor="#DC3545">
            <FaDoorClosed fontSize={35} color="#fff" />
          </C.BoxLeft>
          <C.BoxRight>
            <p>Check-out realizados</p>
            <h3>{0} hoje</h3>
          </C.BoxRight>
        </C.Box>
      </C.InfoBox>
      <C.Form>
        <C.Buttons>
          <C.Button backgroundColor="#6C757D">Todas</C.Button>
          <C.Button backgroundColor="#198754">Disponiveis {0}</C.Button>
          <C.Button backgroundColor="#3498DB">Inciadas {0}</C.Button>
          <C.Button backgroundColor="#FFC107" textColor>
            Check-in {0}
          </C.Button>
        </C.Buttons>
      </C.Form>
      <C.ReservationsBox>
        <C.ReservationItem className="boxI">
          <C.ReservationItemTop backgroundColor="#F7AD04" textColor>
            <PiHouseLineBold />
            <span>QUARTO 002</span>
          </C.ReservationItemTop>
          <C.ReservationItemCenter>
            <span>
              <IoPricetag />
              Nº da reserva: {0}
            </span>
            <span>
              <FaUserTag />
              TESTE
            </span>
            <span>
              <HiUsers />
              Hospedes: {0}
            </span>
            <span>
              <FaRegCalendarAlt />
              00/00/0000 - 11/11/1111
            </span>
          </C.ReservationItemCenter>
          <C.ReservationItemBottom>
            <button>Check-in em atraso</button>
          </C.ReservationItemBottom>
        </C.ReservationItem>
        <C.ReservationItem>
          <C.ReservationItemTop backgroundColor="#3498DB">
            <PiHouseLineBold />
            <span>QUARTO 001</span>
          </C.ReservationItemTop>
          <C.ReservationItemCenter>
            <span>
              <IoPricetag />
              Nº da reserva: {0}
            </span>
            <span>
              <FaUserTag />
              TESTE
            </span>
            <span>
              <HiUsers />
              Hospedes: {0}
            </span>
            <span>
              <FaRegCalendarAlt />
              00/00/0000 - 11/11/1111
            </span>
          </C.ReservationItemCenter>
          <C.ReservationItemBottom>
            <button>Check-out em atraso</button>
          </C.ReservationItemBottom>
        </C.ReservationItem>
        <C.ReservationItem>
          <C.ReservationItemTop backgroundColor="#198754">
            <BsHouseAddFill />
            <span>QUARTO 003</span>
          </C.ReservationItemTop>
          <C.ReservationItemCenter>
            <span>
              <BsFillHouseHeartFill />
              Tipo: TESTE{}
            </span>
            <span>
              <FaMoneyCheckAlt />
              Valor diária: R$ 00,00{}
            </span>
            <span>
              <HiUsers />
              Capacidade: {0}
            </span>
          </C.ReservationItemCenter>
          <C.ReservationItemBottom>
            <button>Nova reserva</button>
          </C.ReservationItemBottom>
        </C.ReservationItem>
      </C.ReservationsBox>
    </C.Container>
  )
}

export default Home
