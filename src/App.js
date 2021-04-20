import './App.css';
import reactLogo from './images/react-logo.png'
import { useState } from 'react'
import Modal from './components/Modal'


function App() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [NAME, setNAME] = useState('pi')
  const [PASS, setPASS] = useState('314');

  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const [isWarning, setIsWarning] = useState(false);

  const onLogIn = () => {
    if (name !== NAME | password !== PASS) {
      setIsWarning(true)
      onAlert('Try again!')
    }
    else {
      setIsWarning(false)
      onAlert('Success!')
    }
  }
  const onRegister = () => {
    setNAME(name)
    setPASS(password)
    setIsWarning(false)
    onAlert('You have signed in')
  }

  const onAlert = (text) => {
    setIsOpen(true)
    setMsg(text)
  }




  return (
    <div className="App">
      <div className={'container'}>
        <div className='title'>
          <img src={reactLogo} alt="logo" className="logo" />
          <h1>Welcome</h1>
        </div>
        <div className="content">
          <div className="input-block">
            <label>Name</label>
            <input type="text" className="input" value={name} onChange={(e) => { setName(e.target.value) }} />
          </div>
          <div className="input-block">
            <label>Password</label>
            <input type="text" className="input" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <div className="btn-box">
            <button className="btn" onClick={onLogIn}>
              <p className="btn-text">Log in</p>
            </button>
            <button className="btn" onClick={onRegister}>
              <p className="btn-text">Register</p>
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        msg={msg}
        setIsOpen={setIsOpen}
        isWarning={isWarning}
      >
      </Modal>
    </div>
  );
}

export default App;
