import React, {useEffect} from "react";
import {Unity,useUnityContext} from 'react-unity-webgl'


const LocalUnity = () => {
    
const { unityProvider } = useUnityContext({
    loaderUrl: './buildfiles/webglypydemo21.loader.js',
    dataUrl: './buildfiles/webglypydemo21.data',
    frameworkUrl: "./buildfiles/webglypydemo21.framework.js",
    codeUrl: "./buildfiles/webglypydemo21.wasm",
 
  });
  // useEffect(()=>{
        
  //   // Load any additional scripts here if necessary
  //   const inworldMicrophoneScript = document.createElement('script');
  //   inworldMicrophoneScript.src = './unityaudio/InworldMicrophone.js';
  //   inworldMicrophoneScript.async = true;
  //   document.body.appendChild(inworldMicrophoneScript);
  
  
  // //audio
  // return () => {
  //    document.body.removeChild(inworldMicrophoneScript);
  //  };
  
  // },[])   

    return ( 

        <div>
<Unity  unityProvider={unityProvider}  className="unityCanvas"/>

        </div>
     );
}
 
export default LocalUnity;