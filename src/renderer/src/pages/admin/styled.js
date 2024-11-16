import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: start;
  font-family: 'Poppins', sans-serif;
  .forms {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
`
export const Box = styled.div`
  max-width: 100%;
  height: 100%;
  background-color: #fff;
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
export const Show = styled.div`
  padding: 20px 20px 10px;
  display: flex;
  align-items: center;
  p {
    font-size: 18px;
  }
  select {
    padding: 5px 10px;
    font-size: 14px;
    border: 1px solid #aaa;
    margin: 0 5px;
  }
`

export const Table = styled.div`
  display: flex;
  padding: 0 20px;
  table {
    width: 100%;
    min-height: calc(100% - 150px);
    border-collapse: collapse;
    background-color: #fff;
    thead tr {
      background-color: #eee !important;
    }
    td,
    th {
      text-align: start;
      border: 1px solid #ccc;
      padding: 10px 25px;
    }
    tr {
      background-color: #eee;
    }
    tr:nth-child(odd) {
      background-color: #dedede;
    }
  }
`
export const BoxBottom = styled.div`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .btns {
    align-items: center;
    display: flex;
    gap: 10px;
  }
  span {
    padding: 6px;
  }
  button {
    cursor: pointer;
    border: 1px solid #dedede;
    background-color: #eeeeee;
    border-radius: 3px;
    padding: 6px 15px;
    &:hover {
      opacity: 0.8;
    }
  }
`
