import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import GnyapikaCourses from './GnyapikaCourses';
import React,{useState,useEffect,useRef} from 'react';

function App() {
  const [email,setEmail]=useState(''); 
  const elemRef=useRef(null);
  const logChangeEmail=(email)=>{
    setEmail(email);
    // console.error(email,'error');
    // console.warn(email,'warn');
  }
  useEffect(()=>{
console.log('use Effect Executing');
// return ()=>{
// console.log('i am cleaning up')
// };
elemRef.current.defaultValue="narendra";
elemRef.current.focus();
  },[email])
  return (
    
    <div className="App">
      Gyapika Login Page {email}
      <GnyapikaCourses />
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
      <div class="email">
      Email:<input type={'email'} onChange={(e)=>logChangeEmail(e.currentTarget.value)} ref={elemRef} />
      </div>
      
      </div>
      <div className='col-sm-6'>
      <div class="email">
      Password:<input type={'password'} />
      </div>
      </div>
      </div>
      
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>Harikrishna12</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
