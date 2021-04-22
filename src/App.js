import './App.css';
import React, { useState, useRef } from 'react'
import styled, { ThemeProvider, css } from 'styled-components'
import { MdClose } from 'react-icons/md'
import { IoHeart } from "react-icons/io5"
import { RiCalendar2Fill, RiMoneyDollarCircleFill, RiQuestionLine } from "react-icons/ri"
import flagUrl from './貨幣調換.png'

const theme = {
  primary: 'teal',
  secondary: 'white',
  alert: 'yellow',
  font: 'Arial',
}

const RowView = styled.div`
  flex-direction:row;
`

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

const Text = styled.p`
  margin:0px;
  padding:0px;

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
justify-content:center;
`

const InputTitle = styled.p`
  cursor:text;
  margin:0px; 
  font-size:${props => (props.isFocus || props.primary) ? '12px' : '18px'};
  line-height:24px;
  color:${props => (props.isFocus || props.primary) ? '#4682E9' : '#ACD2FF'};
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
  height:56px;
  padding-top:22px;
  box-sizing:border-box;

  &:focus{
  outline: none;
  }
  &::-webkit-inner-spin-button {
  appearance: none;
  margin: 0;
}
`

const BudgetInputBox = styled(InputBox)`
  width:264px;
  margin-bottom:0px;
`

const Flag = styled.img`
  cursor: pointer;
  width:30px;
  height:30px;
  margin-top:12px ;
  margin-left:24px;
  &:hover{
    filter:drop-shadow(2px 2px 3px rgba(0,0,0,0.2))
  }
  &:active{
    opacity:0.5;
  }
`

const rate = 1 / 0.27
const budget2JPY = (input) => {
  if (typeof eval(input) !== 'number') return '0'
  return Math.round(input * rate * 100) / 100
}



function App() {

  const [tripName, setTripName] = useState('');
  const [budget, setBudget] = useState(0);
  const [isTripNameFocus, setIsTripNameFocus] = useState(false);
  const [isBudgetFocus, setisBudgetFocus] = useState();
  const tripNameRef = useRef(null)
  const budgetRef = useRef(null)
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
          <div>

            <InputBox>
              <div className="input-icon-box">
                <IoHeart size={'24'} color="#4682E9" />
              </div>
              <TextInputBox onBlur={() => { setIsTripNameFocus(false) }} onClick={() => { setIsTripNameFocus(true); tripNameRef.current.focus() }}>
                <InputTitle isFocus={isTripNameFocus} primary={tripName}>旅行名稱</InputTitle>
                <TextInput ref={tripNameRef} primary={tripName} onChange={(e) => { setTripName(e.target.value) }} />
              </TextInputBox>
            </InputBox>
            <InputBox>
              <div className="input-icon-box">
                <RiCalendar2Fill size={'24'} color="#4682E9" />
              </div>
              <TextInputBox >
                <InputTitle >旅行日期</InputTitle>
              </TextInputBox>
            </InputBox>
            <div style={{ flexDirection: 'row' }}>
              <div className="ai-flex-end">
                <BudgetInputBox>
                  <div className="input-icon-box">
                    <RiMoneyDollarCircleFill size={'24'} color="#4682E9" />
                  </div>
                  <TextInputBox onBlur={() => { setisBudgetFocus(false) }} onClick={() => { setisBudgetFocus(true); budgetRef.current.focus() }}>
                    <InputTitle isFocus={isBudgetFocus} primary={budget}>你的預算</InputTitle>
                    <TextInput type={'number'} ref={budgetRef} primary={budget} onChange={(e) => { setBudget(e.target.value) }} />
                  </TextInputBox>
                </BudgetInputBox>
                <Text style={{ marginRight: '16px', fontSize: '14px', lineHeight: '24px', color: '#4682E9' }}>≈ {budget2JPY(budget)} JPY</Text>
                <Text style={{ position: 'absolute', marginTop: '16px', marginRight: '16px', fontSize: '18px', lineHeight: '24px', color: '#4682E9' }}>NTD</Text>
              </div>
              <Flag src={flagUrl} />
            </div>
          </div>
          <RowView style={{ marginTop: '24px', alignItems: 'center' }}>
            <SetRateText >自訂兌換日幣時的匯率?</SetRateText>
            <RiQuestionLine size={20} color={'gray'} />
          </RowView>
        </Screen>
      </div>
    </ThemeProvider>
  );
}

export default App;

const SetRateText = styled(Text)`
  cursor:pointer;
  font-size:12px;
  line-height:24px;
  margin-right:4px;
  color:gray;
  &:active{
    opacity:0.5;
  }
`