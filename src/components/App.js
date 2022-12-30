import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  
//   const handler = (e) => {
//     if(e.target.value == ''){
//       (e.target.id == 'input1') ? setNum1(0) : setNum2(0);
//     }else{
//       (e.target.id == 'input1') ? setNum1(Number(e.target.value)) : setNum2(Number(e.target.value));
//     }
//   }
  
  const handler1 = (e) => {
    if(e.target.value == '') {
      setNum1(0);
    }
    else {
      setNum1(Number(e.target.value));
    }
  }
  
  const handler2 = (e) => {
    if(e.target.value == '') {
      setNum2(0);
    }
    else {
      setNum2(Number(e.target.value));
    }
  }

  return (
    <div id="main">
      <input id='input1' onChange={handler1}/>
       +
      <input id='input2' onChange={handler2}/> 
      
      <p id='result'>{num1+num2}</p>
    </div>
  )
}


export default App;
