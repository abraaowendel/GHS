import * as C from './styled'
import { FaUsers } from 'react-icons/fa'

function Home() {
  return (
    <C.Container className="base">
      <C.InfoBox>
        <C.Box>
          <C.BoxLeft backgroundColor="#169CB2">
            <FaUsers fontSize={40} color="#fff" />
          </C.BoxLeft>
          <div>
            <h3>Hospede</h3>
            <p>{0} atualmente</p>
          </div>
        </C.Box>{' '}
        <C.Box>
          <C.BoxLeft backgroundColor="#169CB2">
            <FaUsers fontSize={40} color="#fff" />
          </C.BoxLeft>
          <div>
            <h3>Acomodações</h3>
            <p>{0} disponíveis</p>
          </div>
        </C.Box>{' '}
        <C.Box>
          <C.BoxLeft backgroundColor="#169CB2">
            <FaUsers fontSize={40} color="#fff" />
          </C.BoxLeft>
          <div>
            <h3>Check-in realizados</h3>
            <p>{0} hoje</p>
          </div>
        </C.Box>{' '}
        <C.Box>
          <C.BoxLeft backgroundColor="#169CB2">
            <FaUsers fontSize={40} color="#fff" />
          </C.BoxLeft>
          <div>
            <h3>Check-out realizados</h3>
            <p>{0} hoje</p>
          </div>
        </C.Box>
      </C.InfoBox>
    </C.Container>
  )
}

export default Home
