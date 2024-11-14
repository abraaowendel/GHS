import styled from 'styled-components'

export const Container = styled.div`
  background-color: #dbe3e9;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Box = styled.div`
  max-width: 450px;
  width: 100%;
  margin: auto;
  padding: 20px 40px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 2px;
`
export const Result = styled.div`
  font-family: 'Poppins', sans-serif;
  width: 100%;
  text-align: center;
  padding: 25px 0 5px;
  span {
    display: block;
    color: #dc3545;
    letter-spacing: 1.1px;
    font-size: 22px;
    font-weight: bold;
  }
  border-top: 1px solid #ccc;
`

export const Logo = styled.div`
  padding: 10px 0;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: #3497da;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  input {
    background-color: #f0f0f0;
    outline-color: #6c757d;
    border-color: transparent;
  }
  input,
  button {
    width: 100%;
    margin: 10px 0;
    padding: 15px 10px;
    font-size: 18px;
    border-radius: 5px;
    border-color: transparent;
  }
  button {
    cursor: pointer;
    background-color: #6c757d;
    color: #fff;
    &:hover {
      opacity: 0.9;
    }
  }
`
export const Copywriting = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 20px;
  font-family: 'Poppins', sans-serif;
  p {
    font-size: 15px;
    color: #212529;
    line-height: 20px;
    font-weight: 600;
  }
  a {
    text-decoration: none;
    color: #3497da;
    font-size: 16px;
  }
`
