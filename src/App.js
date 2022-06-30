import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
setTimeout(() => {
  fetch('https://jsonplaceholder.typicode.com/users').then(e=>e.json())
  .then(data=>console.log(data))


}, 4000);
  },[])

  return (
    <>
    <div className="app">
    <h5>krajesh</h5>
    <p>
    JavaScript can be confusing and downright weird at times,
     but there is so much you can do with it. 
     Developers who learn JavaScript usually limit themselves 
    to coding challenges and classic web projects such as a portfolio
    </p>
    <h5>
    JavaScript can be confusing and downright weird at times,
     but there is so much you can do with it. 
     Developers who learn JavaScript usually limit themselves 
    to coding challenges and classic web projects such as a portfolio  
    </h5>

    </div>
      <div className="apps">
      <h5>krajesh</h5>
      <p>
      JavaScript can be confusing and downright weird at times,
       but there is so much you can do with it. 
       Developers who learn JavaScript usually limit themselves 
      to coding challenges and classic web projects such as a portfolio
      </p>
      <h5>
      JavaScript can be confusing and downright weird at times,
       but there is so much you can do with it. 
       Developers who learn JavaScript usually limit themselves 
      to coding challenges and classic web projects such as a portfolio  
      </h5>
  
      </div>
      <div className="stops">
    <h5>krajesh</h5>
    <p>
    JavaScript can be confusing and downright weird at times,
     but there is so much you can do with it. 
     Developers who learn JavaScript usually limit themselves 
    to coding challenges and classic web projects such as a portfolio
    </p>
    <h5>
    JavaScript can be confusing and downright weird at times,
     but there is so much you can do with it. 
     Developers who learn JavaScript usually limit themselves 
    to coding challenges and classic web projects such as a portfolio  
    </h5>

    </div>
      </>
  );
}

export default App;
