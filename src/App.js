import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import {Unity,useUnityContext} from 'react-unity-webgl'
import LoadingPage from './loadingPage';
import LocalUnity from './unityLocal';

function App() {


  //pause until loaded
  //loading phase spinner

  //show when loaded

//   <div className="App unityDiv"> 
    

//   <Unity className='unityCanvas' unityProvider={unityProvider} />
// </div>
  






  return (
    <div className='unityContainer' >

    
    <div id="unityDiv" className="App unityDiv"> 
  
    <LoadingPage />

    {/* <LocalUnity /> */}
    {/* <Unity className='unityCanvas' unityProvider={unityProvider} /> */}
</div>
</div>
  );
}

export default App;
