import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-family: 'Poppins', sans-serif;
  .formsTop {
    display: flex;
    width: 100%;
    gap: 30px;
    margin-bottom: 30px;
  }
  .formsBottom {
    display: flex;
    width: calc(50% - 15px);
    padding-bottom: 30px;
  }
  .boxEmail {
    max-width: none;
  }
`
export const Message = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => (props.borderColor ? props.borderColor : 'transparent')};
  color: 1px solid ${(props) => props.textColor};
  padding: 10px;
  margin-bottom: 20px;
  transition: 1s all ease-in;
`
export const Photo = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  label{
    font-size: 16px;
    cursor: pointer;
    padding: 5px; 
  }
  button{
    cursor: pointer;
    padding: 5px; 
    background-color: #3497DA;
    border: 1px solid #ccc;
    color: #fff;
    border-radius: 3px;
    &:hover{
    }
  }
  input {
    visibility: hidden;
    opacity: 0;
    width: 0;
    height: 0;
  }
`
export const Box = styled.div`
  max-width: 50%;
  width: 100%;
  margin: auto;
  background-color: #ddd;
  border-radius: 2px;
  box-shadow:
    0 0 1px rgba(0, 0, 0, 0.125),
    0 1px 5px rgba(0, 0, 0, 0.2);
`
export const BoxTop = styled.div`
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
  input {
    width: 100%;
    border: 1px solid #ddd;
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
  .inputSendEmail {
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 10px 0;
  }
  .btnArea {
    display: flex;
    justify-content: end;
  }
  #send {
    width: auto;
    margin-right: 5px;
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
