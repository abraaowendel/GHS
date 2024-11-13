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
        <C.ReservationItem>
          <C.ReservationItemTop backgroundColor="#F7AD04" textColor>
            <PiHouseLineBold fontSize={30}/>
            <span>QUARTO 002</span>
          </C.ReservationItemTop>
          <C.ReservationItemCenter>
            <span>
              <IoPricetag color="#F7AD04" />
              Nº da reserva: {0}
            </span>
            <span>
              <FaUserTag color="#F7AD04" />
              TESTE
            </span>
            <span>
              <HiUsers color="#F7AD04" />
              Hospedes: {0}
            </span>
            <span>
              <FaRegCalendarAlt color="#F7AD04" />
              00/00/0000 - 11/11/1111
            </span>
          </C.ReservationItemCenter>
          <C.ReservationItemBottom>
            <C.ButtonReservation>Check-in em atraso</C.ButtonReservation>
          </C.ReservationItemBottom>
        </C.ReservationItem>
        <C.ReservationItem>
          <C.ReservationItemTop backgroundColor="#3498DB">
            <PiHouseLineBold fontSize={30}/>
            <span>QUARTO 001</span>
          </C.ReservationItemTop>
          <C.ReservationItemCenter>
            <span>
              <IoPricetag color="#3498DB" />
              Nº da reserva: {0}
            </span>
            <span>
              <FaUserTag color="#3498DB" />
              TESTE
            </span>
            <span>
              <HiUsers color="#3498DB" />
              Hospedes: {0}
            </span>
            <span>
              <FaRegCalendarAlt color="#3498DB" />
              00/00/0000 - 11/11/1111
            </span>
          </C.ReservationItemCenter>
          <C.ReservationItemBottom>
            <C.ButtonReservation>Check-out em atraso</C.ButtonReservation>
          </C.ReservationItemBottom>
        </C.ReservationItem>
        <C.ReservationItem>
          <C.ReservationItemTop  backgroundColor="#198754">
            <BsHouseAddFill fontSize={30}/>
            <span>QUARTO 003</span>
          </C.ReservationItemTop>
          <C.ReservationItemCenter>
            <span>
              <BsFillHouseHeartFill color="#198754" />
              Tipo: TESTE{}
            </span>
            <span>
              <FaMoneyCheckAlt color="#198754" />
              Valor diária: R$ 00,00{}
            </span>
            <span>
              <HiUsers color="#198754" />
              Capacidade: {0}
            </span>
          </C.ReservationItemCenter>
          <C.ReservationItemBottom>
            <C.ButtonReservation color="#198754">Nova reserva</C.ButtonReservation>
          </C.ReservationItemBottom>
        </C.ReservationItem>
      </C.ReservationsBox>
    </C.Container>
  )
}

export default Home
