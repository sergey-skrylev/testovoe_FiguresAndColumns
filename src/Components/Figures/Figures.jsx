import styled from 'styled-components'

export const Circle = styled.div`
  height: 180px;
  width: 180px;
  border: 2px solid rgb(196, 161, 166);
  padding: 10px;
  border-radius: 100px;
  margin: 12px;
  cursor: grab;
  background-color: #8946A6;
`
export const Square = styled.div`
  height: 180px;
  width: 180px;
  border: 2px solid rgb(196, 161, 166);
  padding: 10px;
  border-radius: 0px;
  margin: 12px;
  cursor: grab;
  background-color: #864879;
`
export const Rectangle = styled.div`
  height: 90px;
  width: 180px;
  border: 2px solid rgb(196, 161, 166);
  padding: 10px;
  margin: 12px;
  border-radius: 0px;
  cursor: grab;
  background-color: #6E3CBC;
`
export const Triangle = styled.div`
  width: 0;
  height: 0;
  margin: 12px;
  border-left: 90px solid transparent;
  border-right: 90px solid transparent;
  border-bottom: 180px solid #FFBCD1;
  `
