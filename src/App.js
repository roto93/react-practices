import './App.css';
import React, { useState } from 'react'
import styled, { ThemeProvider, css } from 'styled-components'
import { MdClose } from 'react-icons/md'
import { IoHeart } from "react-icons/io5";

const theme = {
  primary: 'teal',
  secondary: 'white',
  alert: 'yellow',
  font: 'Arial',
}

const Screen = styled.div`
  width:360px;
  height:640px;
  background-color:#fff;
  align-items: center;
`

const StatusBar = styled.div`
  height:24px;
  width:100%;
  background-color:#E4E4E4;
`

const Header = styled.header`
  height:56px;
  width:100%;
  background-color:#fff;
  box-shadow:0px 5px 4px rgba(0,0,0,0.1);
  flex-direction:row;
  justify-content:space-between;
  align-items: center;
`

const ConfirmButtonBox = styled.div`
  user-select: none;
  cursor: pointer;
  justify-content:center;
  align-items: center;
  width:56px;
  height:36px;
  font-size:18px;
  line-height:20px;
  font-weight:normal;
  font-family:微軟正黑體;
  margin-right:10px;
  &:hover{
    font-weight:bold;
  }
  &:active{
    font-weight:bold;
    background-color:#c5c4c4;
  }
`

const TripImageBox = styled.div`
  width:104px;
  height:128px;
  justify-content:space-between;
  align-items: center;
  margin-top:16px;
  margin-bottom:16px;
`

const TripImage = styled.img`
  width:104px;
  height:104px;
  border-radius:60px;
  border:1px solid gray;
`

const TripImageTitle = styled.p`
  cursor: pointer;
  margin:0px;
  padding:0px;
  font-size:12px;
  line-height:16px;
  color:#7A7A7A;
  &:hover{
    color:#7A7A7A;
  }
  &:active{
    opacity:0.7;
  }
`

const InputBox = styled.div`
width:328px;
height:56px;
margin-bottom:16px;
border-radius:30px;
background-color:#E7F0FE;
flex-direction:row;
align-items:center;
`

const TextInputBox = styled.div`

`

const InputTitle = styled.p`
  margin:0px; 
  font-size:${props => (props.isFocus || props.primary) ? '12px' : '18px'};
  line-height:24px;
  color:#4682E9;
  position:absolute;
  transition:all 0.3s;
  transform: translate(0px, ${props => (props.isFocus || props.primary) ? '-10px' : '0px'});
`

const TextInput = styled.input`
  border:none;
  background-color:transparent;
  font-size:18px;
  line-height:24px;
  transition:all 0.3s;
  transform:translate(0px, ${props => props.primary ? '8px' : '0px'});

  &:focus{
  outline: none;
  transform: translate(0px, 8px);
}

`


function App() {

  const [tripName, setTripName] = useState('');
  const [budget, setBudget] = useState(0);
  const [isTripNameFucus, setIsTripNameFucus] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Screen>
          <StatusBar />
          <Header>
            <div className="icon-box">
              <MdClose size={24} />
            </div>
            <ConfirmButtonBox >完成</ConfirmButtonBox>
          </Header>
          <TripImageBox>
            <TripImage></TripImage>
            <TripImageTitle>更換旅行圖示</TripImageTitle>
          </TripImageBox>
          <InputBox>
            <div className="icon-box">
              <IoHeart size={'24'} color="#4682E9" />
            </div>
            <TextInputBox onBlur={() => { setIsTripNameFucus(false) }} onClick={() => { setIsTripNameFucus(true) }}>
              <InputTitle isFocus={isTripNameFucus} primary={tripName}>旅行名稱</InputTitle>
              <TextInput primary={tripName} onChange={(e) => { setTripName(e.target.value) }} />
            </TextInputBox>
          </InputBox>
        </Screen>
      </div>
    </ThemeProvider>
  );
}

export default App;

