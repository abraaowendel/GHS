import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;
`
export const InfoBox = styled.div`
  display: flex;
  gap: 20px;
`
export const Box = styled.div`
  flex: 1;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  min-height: 80px;
  background-color: #fefefe;
  box-shadow:
    0 0 1px rgba(0, 0, 0, 0.125),
    0 1px 3px rgba(0, 0, 0, 0.2);
`
export const BoxLeft = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 15px;
  margin-right: 10px;
`
export const BoxRight = styled.div`
  h3 {
    margin-top: 8px;
  }
  p,
  h3 {
    font-size: 16px;
  }
`
export const Form = styled.form`
  padding: 30px 0 8px;
  border-bottom: 1px solid #ccc;
`
export const Buttons = styled.div`
  display: flex;
  gap: 5px;
`
export const Button = styled.button`
  cursor: pointer;
  display: block;
  padding: 3px 8px;
  font-weight: bold;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => (props.textColor ? '#000' : '#fff')};
  border: 1px solid transparent;
  border-radius: 3px;
`
export const ReservationsBox = styled.div`
  flex-wrap: wrap;
  padding: 40px 0;
  gap: 20px;
  display: flex;
`
export const ReservationItem = styled.div`
  cursor: pointer;
  flex: 0 0 auto;
  min-width: 31.4%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 2px;
  word-wrap: break-word;
  box-shadow:
    0 0 1px rgba(0, 0, 0, 0.125),
    0 1px 3px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.05);
  }
`
export const ReservationItemTop = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => (props.textColor ? '#000' : '#fff')};
  svg{
    margin-right: 5px;
    margin-bottom: 0px;
  }
`
export const ReservationItemCenter = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  padding: 15px;
  min-height: 151px;
  span{
    margin: 5px 0;
    svg{
      margin-right: 5px;
    }
  }
`
export const ReservationItemBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 10px;

`
export const ButtonReservation = styled.div`
  border: 1px solid;
  border-color: ${(props) => (props.color ? props.color : '#ff0000')};
  color: ${(props) => (props.color ? props.color : '#ff0000')};
  padding: 3px 8px;
  font-size: 13px;
  cursor: pointer; 
`
