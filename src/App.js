import './App.css';


function App() {
  return (
    <div className="App">
      <div className={'container'}>
        <div className='title'>
          <img src={require('../public/react-logo.png')} alt="logo" />
          <h1>Welcome</h1>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
}

export default App;
