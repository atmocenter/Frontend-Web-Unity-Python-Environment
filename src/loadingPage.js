import React from 'react';
import { useEffect, useState, useRef } from 'react';
import UnityLoader from './unityLoader';
import { Spinner, ProgressBar } from 'react-bootstrap';
import './App.css';
const LoadingPage = () => {
    
    //when page is loaded, begin fetching data
    // via a blob
    
    const [depLoaded, setDepLoaded] = useState(0) 
    const [loadingVals, setLoadingVals] = useState("")
    const [loaderUrl, setLoaderUrl] = useState("")
    const [dataUrl, setDataUrl] = useState("")
    const [frameUrl,setFrameUrl] = useState("")
    const [wasmUrl, setWasmUrl] = useState("")
    const [dataCurr, setDataCurr] = useState(0)
    const [percentageBar, setPercentBar] = useState(0)

    const teamMembers = [
        { name: '', bio: '',
        Image:'' },
        { name: '', bio: ' ', Image:'' },
    
        { name: '', bio: '',
         Image:'' },
        { name: '', bio: '',
        Image:'' },
        { name: '', bio:"",
        Image:'' },
      ];

    // const isMounted = useRef(un)

    let loadingUrl  = {
        data: "",
        framework: "",
        loader: "",
        wasm: ""
    }

    let currIndex = 0
    useEffect(()=>{
        if(dataUrl != "")
        {
            // setDataCurr(dataCurr + 1)
        }
        
    },[dataUrl])

    const updateCurrIndex = async ()=>{
        await setTimeout(()=>{
            setDataCurr(currIndex)
            console.log("set Timeout: ")
        },1000)
    } 

    useEffect(()=>{
        console.log("percentage: ", percentageBar)
    },[percentageBar])

    const loadDependencies = async ()=>{
        
        let serverurl = "http://localhost:3333/"
        
        
         
        //  serverurl = localurl

       await fetch(serverurl+'getdata',{method: "GET", headers:{'Accept': 'application/octet-stream'}})
        .then( async (res)=>{
            
            const bodyReader = res.body.getReader()
            const contentLen = res.headers.get('Content-Length')
            let totalLen = 0
            let recievedLength = 0
            if(typeof contentLen === 'string')
            {
                totalLen = parseInt(contentLen)
                console.log("total length: ",totalLen)
            }
            
            console.log(contentLen)
            const chunks = []
            while(true)
            {
                const {done,value} = await bodyReader.read()
                

            
                if(done)
                {
                    
                    break

                }
                console.log("after if, value of done: ", done)
                let chunkLength  = 0
                if(typeof value.length ==="number" )
                {
                    console.log("val length: ",value.length)
                    chunkLength = parseInt(value.length)
                }
                recievedLength = recievedLength + chunkLength
                setPercentBar((recievedLength/totalLen)*100)
                
                 chunks.push(value)
            }
            console.log("break happened")

            const blob1 = new Blob(chunks)
            const bUrl = URL.createObjectURL(blob1)
            console.log("loading data: ", bUrl)
            setDataUrl(bUrl)      
            currIndex += 1
            setDataCurr(1)
 })


       



        await fetch(serverurl+'getframe',{method: "GET", headers:{'Accept': 'application/javascript'}})
        .then( async (res)=>{
            
            const bodyReader = res.body.getReader()
            const contentLen = res.headers.get('Content-Length')
            let totalLen = 0
            let recievedLength = 0
            if(typeof contentLen === 'string')
            {
                totalLen = parseInt(contentLen)
                console.log("total length: ",totalLen)
            }
            
            console.log(contentLen)
            const chunks = []
            while(true)
            {
                const {done,value} = await bodyReader.read()
                

            
                if(done)
                {
                    
                    break

                }
                console.log("after if, value of done: ", done)
                let chunkLength  = 0
                if(typeof value.length ==="number" )
                {
                    console.log("val length: ",value.length)
                    chunkLength = parseInt(value.length)
                }
                recievedLength = recievedLength + chunkLength
                setPercentBar((recievedLength/totalLen)*100)
                
                 chunks.push(value)
            }
            console.log("break happened")

            const blob1 = new Blob(chunks)
            const bUrl = URL.createObjectURL(blob1)
            console.log("loading vals: ", bUrl)
            setFrameUrl(bUrl)
            currIndex += 1
            setDataCurr(2)    
        })
     


       await  fetch(serverurl+'getwasm',{method: "GET", headers:{'Accept': 'application/wasm'}})
        .then(async (res)=>{
           
            const bodyReader = res.body.getReader()
            const contentLen = res.headers.get('Content-Length')
            let totalLen = 0
            let recievedLength = 0
            if(typeof contentLen === 'string')
            {
                totalLen = parseInt(contentLen)
                console.log("total length: ",totalLen)
            }
            
            console.log(contentLen)
            const chunks = []
            while(true)
            {
                const {done,value} = await bodyReader.read()
                

            
                if(done)
                {
                    
                    break

                }
                console.log("after if, value of done: ", done)
                let chunkLength  = 0
                if(typeof value.length ==="number" )
                {
                    console.log("val length: ",value.length)
                    chunkLength = parseInt(value.length)
                }
                recievedLength = recievedLength + chunkLength
                setPercentBar((recievedLength/totalLen)*100)
                
                 chunks.push(value)
            }
            console.log("break happened")

            const blob1 = new Blob(chunks)
            const bUrl = URL.createObjectURL(blob1)
            console.log("loading vals: ", bUrl)
            setWasmUrl(bUrl)
            currIndex += 1
            setDataCurr(3)  
        })
       

        
   
        await fetch(serverurl+'getloader',{method: "GET", headers:{'Accept': 'application/javascript'}})
        .then(async (res)=>{
            
            const bodyReader = res.body.getReader()
            const contentLen = res.headers.get('Content-Length')
            let totalLen = 0
            let recievedLength = 0
            if(typeof contentLen === 'string')
            {
                totalLen = parseInt(contentLen)
                console.log("total length: ",totalLen)
            }
            
            console.log(contentLen)
            const chunks = []
            while(true)
            {
                const {done,value} = await bodyReader.read()
                

            
                if(done)
                {
                    
                    break

                }
                console.log("after if, value of done: ", done)
                let chunkLength  = 0
                if(typeof value.length ==="number" )
                {
                    console.log("val length: ",value.length)
                    chunkLength = parseInt(value.length)
                }
                recievedLength = recievedLength + chunkLength
                setPercentBar((recievedLength/totalLen)*100)
                
                 chunks.push(value)
            }
            console.log("break happened")

            const blob1 = new Blob(chunks)
            const bUrl = URL.createObjectURL(blob1)
            console.log("loading vals: ", bUrl)
            setLoaderUrl(bUrl)
            currIndex += 1
            setDataCurr(4)
            setDepLoaded(1)  
        })
     
       
         
     }


    useEffect(()=>{

        console.log( "data Curr: " ,dataCurr)
        
        

    },[dataCurr])

    let CountMounts = 0

    useEffect(()=>{
        
 
   

        if(CountMounts == 0)
        {
           loadDependencies() 
           CountMounts = 1
        }


        
    },[])   


    const UnityStage = ()=>{
        if(depLoaded == 0)
        {
            return (
                // spinner
                <div className='LoadingContainer'>

                  <div className='loading'  > 
                    {/* <Spinner className="LoadingSpinner" animation="border" style={{ color:"black",textAlign: "center" }}/> */}

                    <div className='loadText'> Loading files : {dataCurr} / 4 </div>
                    {/* progress bar */}
                    <ProgressBar className='progBar' animated = {true} now={percentageBar} label={`${percentageBar.toPrecision(4)}%`}/>
                    
                    <div className="team-container">
      <h2>Our Team</h2>
      <div className="members-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="member-card">
            <img src={member.Image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
                
                </div>  

                </div>
                
            )
        }
        else if (depLoaded == 1)
        {
            console.log("data curr when deploaded = 1: ", dataCurr)
            
           return(
           
           <div className="App unityDiv"> 
           <UnityLoader  loader={loaderUrl} data={dataUrl} wasm={wasmUrl} frame={frameUrl} />
           </div>
       
    )

    

        }
    }

    // const npm

    
    return ( 
        
    <div >

        {UnityStage()}
        {/* <div>
            
           
           
           
        </div> */}
    </div> 
    );
}
 
export default LoadingPage;