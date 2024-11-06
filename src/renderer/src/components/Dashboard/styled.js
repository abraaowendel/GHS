import styled from 'styled-components'

export const Dashboard = styled.div`
  position: relative;
  min-width: 240px;
  height: 100vh;
  background-color: #3497da;
  color: #000;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  font-family: 'Poppins', sans-serif;
  user-select: none;
  h1 {
    color: #fff;
    text-align: center;
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
    position: absolute;
    bottom: 30px;
    right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    background-color: #fff;
    color: #3497da;
    border-radius: 2px;
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