import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import GnyapikaCourses from './GnyapikaCourses';
// import React,{useState,useEffect,useRef,useCallback,useMemo} from 'react';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contacts from './Contacts';
import Home from './Home';

function App() {
//   const [email,setEmail]=useState('');
//   const [count,setCount]=useState(0);
//   // const [todos,setTodos]=useState([]);
//   const passarguments=(args)=>{
//     console.log(args);
//   }
//   const calculation= useMemo(()=>expensiveCalculation(count),[count]);
//   const increment=()=>{
//     setCount((c)=>c+1);
//   }
//   const elemRef=useRef(null);
//   const printData=useCallback(()=>{
//     setEmail("abcd");
//   })
//   const logChangeEmail=(email)=>{
//     setEmail(email);
//     // console.error(email,'error');
//     // console.warn(email,'warn');
//   }
//   useEffect(()=>{
// console.log('use Effect Executing');

// // elemRef.current.defaultValue="narendra";
// elemRef.current.focus();
//   },[email])
  return (
    
    <div className="App">
      <a href='/'>home</a>
      <a href='/home'>home</a>
      <a href='/contacts'>contacts</a>
      <BrowserRouter>
<Routes>
<Route path="/" exact element={<Home />} >

{/* <Route path="abcd1" element={} /> */}
 </Route>
 <Route path="/contacts" element={<Contacts />} />
<Route path="/home" element={<Home />} /> 
</Routes>
</BrowserRouter>
<GnyapikaCourses  />
      {/* Gyapika Login Page {email}
      <GnyapikaCourses childFunction={printData} count={count} />
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
      <button onClick={increment}>+</button>
      <h2>expensive Calculation</h2>
      {calculation} */}
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

// const expensiveCalculation=(num)=>{
// console.log("calculating",num);
// for(let i=0;i<1000;i++){
// num+=1
// }
// return num;
// };

export default App;
