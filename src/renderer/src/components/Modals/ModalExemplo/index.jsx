import * as C from "../styled";
import { FaSave, FaIdCard } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

export const ModalExemplo = ({onClose}) => {
  return (
    <C.Context>
      <C.Filter>

      </C.Filter>
      <C.Box>
        <C.Form>
          <C.BoxTop>
            <FaIdCard fontSize={18} />
            <span></span>
            <IoMdClose color="#ff0000" id="closeModal" onClick={onClose} />
          </C.BoxTop>
        </C.Form>
      </C.Box>
    </C.Context>
  )
}
