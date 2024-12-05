import { useEffect, useState } from 'react'
import * as C from './styled'
import { FaSave, FaIdCard, FaEdit } from 'react-icons/fa'
import ChangeTitle from '../../utils/changeTitle'
import { ModalAdmin } from '../../components/Modals/ModalAdmin/index'

function Admin() {
  const condition = true
  const [showModal, setShowModal] = useState(false)

  const [dataUser, setDataUser] = useState({
    fullName: '',
    dateOfBirth: '',
    role: '',
    login: '',
    password: ''
  })

  useEffect(() => {
    ChangeTitle('Painel do Administrador')
  }, [])

  const handleShowModal = () => {
    setShowModal(true)
  }  
  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <C.Container className="base">
      <C.Message></C.Message>
      <div className="forms">
        <C.Box className="register">
          <C.BoxTop>
            <FaIdCard fontSize={18} />
            <span>Funcionários Cadastrados</span>
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
                  <th>Tipo</th>
                  <th>Status</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                {/* data && data.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.fullName}</td>
                  <td>{item.cpf}</td>
                  <td>{item.role}</td>
                  <td
                    style={{
                      backgroundColor: item.status ? '#00ff40' : '#ff0000',
                      borderColor: item.status ? '#00ff40' : '#ff0000',
                      color: '#fff',
                      fontWeight: 'Bold'
                    }}
                  >
                    {item.status ? 'Ativo' : 'Inativo'}
                  </td>
                  <td style={{textAlign: "center", cursor:"pointer"}}>
                    <FaEdit fontSize={20} />
                  </td>
                </tr>

                )) */}
                <tr>
                  <td>01</td>
                  <td>José da Silva Oliveira Cardoso</td>
                  <td>110.114.254-54</td>
                  <td>Administrador</td>
                  <td
                    style={{
                      backgroundColor: condition ? '#00ff40' : '#ff0000',
                      borderColor: condition ? '#00ff40' : '#ff0000',
                      color: '#fff',
                      fontWeight: 'Bold'
                    }}
                  >
                    {condition ? 'Ativo' : 'Inativo'}
                  </td>
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
        <C.Box>
          <C.BoxTop>
            <FaIdCard fontSize={18} />
            <span>Cadastro do Funcionário</span>
          </C.BoxTop>
          <C.Form>
            <label htmlFor="fullName">Nome Completo</label>
            <input type="text" value={dataUser.fullName} id="fullName" required />
            <label htmlFor="dateOfBirth">Data de Nascimento</label>
            <input type="text" value={dataUser.dateOfBirth} id="dateOfBirth" required />
            <label htmlFor="role">Função</label>
            <input type="text" value={dataUser.role} id="role" required />
            <div className="inputGroup">
              <div className="inputGroutItem">
                <label htmlFor="Login">Login</label>
                <input type="text" value={dataUser.login} id="Login" />
              </div>
              <div className="inputGroutItem">
                <label htmlFor="password">Senha</label>
                <input type="text" value={dataUser.password} id="password" required />
              </div>
            </div>
            <div className="btnArea">
              <button onClick={() => null}>
                <FaSave />
                <span>Cadastrar</span>
              </button>
            </div>
          </C.Form>
        </C.Box>
        {showModal && <ModalAdmin onClose={handleCloseModal}/>}
      </div>
    </C.Container>
  )
}

export default Admin
