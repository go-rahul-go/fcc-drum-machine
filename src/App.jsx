
import { audioClips } from './data'
import './App.css'
import { useState } from 'react'

function App() {
  const [clipString,changeClipString]=useState("")
  const playSound = (e) => {
   let clip=audioClips.find((clip)=>clip.keyTrigger === e.key)
   if(!clip)
   {
    return;
   }
   else{
    let a=document.getElementById(clip.keyTrigger);
    a.play();
    changeClipString(clip.description)
   }
  }
  return (
    <>
      <h1>drum machine</h1>
      <div id="drum-machine" className='container' tabIndex="0" onKeyDown={playSound}>
        <div className='drum'>
          {
            audioClips.map((clip, index) => {
              return (
                <Drum clip={clip.url} keytrigger={clip.keyTrigger} key={index} changeClipString={changeClipString} description={clip.description}/>
              )
            })
          }
        </div>
        <div id="display">
          {clipString}
        </div>
      </div>
    </>
  )


}

export default App


function Drum({ clip, keytrigger,changeClipString,description }) {
  const playAudio=(keytrigger)=>{
    let e=document.getElementById(keytrigger);
    e.play();
    changeClipString(description)

  }
  return(
    <div className='drum-pad' id={`drum-${keytrigger}`} onClick={()=>playAudio(keytrigger)}>
      <audio src={clip} id={keytrigger} className='clip'/>
        {keytrigger}
    </div>
  )

}