import * as C from './styled'
import { useEffect, useState } from 'react'
import { FaSave, FaIdCard,FaEdit } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoLocationSharp } from 'react-icons/io5'
import ChangeTitle from '../../utils/changeTitle'

function Settings() {
  const [dataHosting, setDataHosting] = useState({
    cnpj: '',
    name: '',
    email: '',
    site: '',
    phone: '',
    whatsapp: ''
  })

  const [dataAndress, setDataAndress] = useState({
    cep: '',
    address: '',
    number: '',
    complement: '',
    city: '',
    district: ''
  })
  const [dataEmailSettings, setDataEmailSettings] = useState({
    email: '',
    password: '',
    host: '',
    check: ''
  })

  useEffect(() => {
    ChangeTitle('Configurações')
  }, [])

  return (
    <C.Container className="base">
      <C.Message></C.Message>
      <C.Photo>
        <button>
          <label htmlFor="changeLogo"><FaEdit fontSize={14}/> Alterar Logo</label>
          <input type="file" src="" alt="Alterar Logo" id='changeLogo'/>
        </button>
      </C.Photo>
      <div className="formsTop">
        <C.Box>
          <C.BoxTop>
            <FaIdCard fontSize={18} />
            <span>Dados da Hospedagem</span>
          </C.BoxTop>
          <C.Form>
            <label htmlFor="cnpj">CNPJ</label>
            <input type="text" value={dataHosting.cnpj} id="cnpj" required />
            <label htmlFor="name">Razão social</label>
            <input type="text" value={dataHosting.name} id="name" required />
            <label htmlFor="email">E-mail</label>
            <input type="text" value={dataHosting.email} id="email" required />
            <label htmlFor="site">Site</label>
            <input type="text" value={dataHosting.site} id="site" />
            <div className="inputGroup">
              <div className="inputGroutItem">
                <label htmlFor="phone">Telefone</label>
                <input type="text" value={dataHosting.phone} id="phone" />
              </div>
              <div className="inputGroutItem">
                <label htmlFor="whatsapp">WhatsApp</label>
                <input type="text" value={dataHosting.whatsapp} id="whatsapp" required />
              </div>
            </div>
            <div className="btnArea">
              <button onClick={() => null}>
                <FaSave />
                <span>Salvar</span>
              </button>
            </div>
          </C.Form>
        </C.Box>
        <C.Box>
          <C.BoxTop>
            <IoLocationSharp fontSize={18} />
            <span>Endereço da Hospedagem</span>
          </C.BoxTop>
          <C.Form>
            <label htmlFor="cep">CEP</label>
            <input type="text" value={dataAndress.cep} id="cep" required />
            <label htmlFor="address">Rua</label>
            <input type="text" value={dataAndress.address} id="address" required />
            <div className="inputGroup">
              <div className="inputGroutItem">
                <label htmlFor="number">Número</label>
                <input type="text" value={dataAndress.number} id="number" />
              </div>
              <div className="inputGroutItem">
                <label htmlFor="complement">Complemento</label>
                <input type="text" value={dataAndress.complement} id="complement" />
              </div>
            </div>
            <label htmlFor="city">Cidade</label>
            <input type="text" value={dataAndress.city} id="city" required />
            <label htmlFor="district">Bairro</label>
            <input type="text" value={dataAndress.district} id="district" required />
            <div className="btnArea">
              <button onClick={() => null}>
                <FaSave />
                <span>Salvar</span>
              </button>
            </div>
          </C.Form>
        </C.Box>
      </div>
      <div className="formsBottom">
        <C.Box className="boxEmail">
          <C.BoxTop>
            <MdEmail />
            <span> Configuração de e-mail</span>
          </C.BoxTop>
          <C.Form>
            <label htmlFor="email">E-mail</label>
            <input type="text" value={dataEmailSettings.email} id="email" required />
            <label htmlFor="password">Senha</label>
            <input type="text" value={dataEmailSettings.password} id="password" required />
            <label htmlFor="host">Host (SMTP)</label>
            <input type="text" value={dataEmailSettings.host} id="host" required />{' '}
            <label htmlFor="address">Porta (SMTP)</label>
            <input type="text" value={dataEmailSettings.door} id="door" required />
            <div className="inputSendEmail">
              <input type="checkbox" name="send" id="send" />
              <label htmlFor="send">Enviar e-mail ao realizar reserva</label>
            </div>
            <div className="btnArea">
              <button onClick={() => null}>
                <FaSave />
                <span>Salvar</span>
              </button>
            </div>
          </C.Form>
        </C.Box>
      </div>
    </C.Container>
  )
}

export default Settings
