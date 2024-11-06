import styled from 'styled-components'

export const Container = styled.div`
  .info-box-icon {
    
  }
`
export const InfoBox = styled.div`
  display: flex;
  gap: 20px;
`
export const Box = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  min-height: 80px;
  background-color: #fff;
  box-shadow: 0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2);
`
export const BoxLeft = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 15px;
  margin-right: 10px;
`