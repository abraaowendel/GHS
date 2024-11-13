import styled from 'styled-components'

export const Dashboard = styled.div`
  position: fixed;
  min-width: 200px;
  min-height: 100vh;
  background-color: #3497da;
  color: #000;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  font-family: 'Poppins', sans-serif;
  user-select: none;
  div{
      display: block;
      height: 135px;
    }
  nav {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px 0 20px 0;
    gap: 10px;
   
    svg {
      margin-top: -2px;
      margin-right: 15px;
      width: 20px;
      height: 23px;
    }
    a {
      display: flex;
      text-decoration: none;
      font-size: 18px;
      color: #fff;
      padding: 15px 0;
    }

    a:hover {
      opacity: 0.8;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    background-color: #fff;
    color: #3497da;
    border-radius: 4px;
    border: transparent;
    cursor: pointer;
    padding: 5px 10px;
    svg{
      margin-right: 5px;
    }
    &:hover{
      opacity: .8;
    }
  }
`
