import styled from 'styled-components'

export const Context = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: all 1s ease-in;
`
export const Filter = styled.div`
  position: fixed;
  z-index: 3;
  background-color: rgba(1, 1, 1, 0.6);
  top: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
`
export const Box = styled.div`
  z-index: 3;
`
export const BoxTop = styled.div`
  position: relative;
  background-color: #f7f7f7;
  border-bottom: 1px solid #000;
  width: 100%;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    line-height: 15px;
    font-size: 18px;
    margin-left: 5px;
  }
  #closeModal {
    position: absolute;
    right: 20px;
    top: 12px;
    font-size: 25px;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
`

export const Form = styled.form`
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    line-height: 35px;
  }
  input,
  select {
    width: 100%;
    border: 1px solid #ccc;
    padding: 8px;
    outline-color: #3497da;
  }
  .inputGroup {
    display: flex;
    gap: 10px;
    width: 100%;
  }
  .inputGroutItem {
    width: 100%;
  }
  .btnArea {
    display: flex;
    justify-content: end;
  }
  button {
    background-color: #3497da;
    color: #fff;
    margin: 15px 0 0;
    padding: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    span {
      margin-left: 5px;
    }
    &:hover {
      opacity: 0.9;
    }
  }
`
