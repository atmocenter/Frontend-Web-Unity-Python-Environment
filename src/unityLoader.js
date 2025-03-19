import React, {useEffect} from "react";
import {Unity,useUnityContext} from 'react-unity-webgl'


const UnityLoader = ({loader, frame, data, wasm}) => {

    const { unityProvider, unityInstance } = useUnityContext({
        loaderUrl: loader,
        dataUrl: data,
        frameworkUrl: frame,
        codeUrl: wasm,
     
      });

      
      useEffect(
        () => (window.unityInstance = unityInstance),
        [unityInstance]
      );
    
     
      

    return ( 
        

<Unity  unityProvider={unityProvider}  className="unityCanvas"/>

        
     );
}
 
export default UnityLoader;