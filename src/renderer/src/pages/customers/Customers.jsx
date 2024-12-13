import { useEffect, useState } from 'react'
import * as C from './styled'
import { FaSave, FaIdCard, FaEdit } from 'react-icons/fa'
import ChangeTitle from '../../utils/changeTitle'
import { ModalAdmin } from '../../components/Modals/ModalAdmin/index'
import { IoMdPersonAdd } from "react-icons/io";
import { ModalNewCustomer } from '../../components/Modals/ModalNewCustomer'
import { ModalCustomer } from '../../components/Modals/ModalCustomer'

function Customers() {
  const condition = true
  const [showModal, setShowModal] = useState(false)
  const [showModalNewCustomer, setShowModalNewCustomer] = useState(false)

  const [dataUser, setDataUser] = useState({
    fullName: '',
    dateOfBirth: '',
    role: '',
    login: '',
    password: ''
  })

  useEffect(() => {
    ChangeTitle('Clientes')
  }, [])

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleShowModalNewCustomer = () => {
    setShowModalNewCustomer(true)
  }

  const handleCloseModalNewCustomer = () => {
    setShowModalNewCustomer(false)
  }

  return (
    <C.Container className="base">
      <C.Message></C.Message>
      <C.ButtonRegister>
        <button onClick={handleShowModalNewCustomer}>
          <IoMdPersonAdd size={18} style={{margin: " 0 5px"}}/>
          Cadastrar Cliente
        </button>
      </C.ButtonRegister>
      <div className="forms">
        <C.Box className="register">
          <C.BoxTop>
            <FaIdCard fontSize={18} />
            <span>Clientes</span>
          </C.BoxTop>
          <C.Show>
            <p>Exibir</p>
            <select name="" id="">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <p>resultados por página</p>
          </C.Show>
          <C.Table>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>E-mail</th>
                  <th>Telefone</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>José da Silva Oliveira Cardoso</td>
                  <td>111.111.111-11</td>
                  <td>teste@gmail.com</td>
                  <td>(82) 981820315</td>
                  <td style={{ textAlign: 'center', cursor: 'pointer' }}>
                    <FaEdit fontSize={20} onClick={handleShowModal} />
                  </td>
                </tr>
              </tbody>
            </table>
          </C.Table>
          <C.BoxBottom>
            <p>
              Mostrando de 1 até {null} de {null} registros
            </p>
            <div className="btns">
              <button onClick={null}>Anterior</button>
              <span>1{null}</span>
              <button onClick={null}>Próximo</button>
            </div>
          </C.BoxBottom>
        </C.Box>
      </div>
      {showModalNewCustomer && <ModalNewCustomer onClose={handleCloseModalNewCustomer}/>}
      {showModal && <ModalCustomer onClose={handleCloseModal}/>}
    </C.Container>
  )
}

export default Customers
