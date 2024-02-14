import './App.css'
import { useEffect, useState } from 'react'


function App() {

  const [isOff, setIsOff] = useState(true)
  const [volume, setVolume] = useState(50)

  
 

  const playAudio = (url) => {
    const audio = new Audio(url)
    audio.volume =  volume / 100
    audio.play()
    displayAudioName(url)
  }

  

  const displayAudioName  = (url) => {
    const audioName = audioUrl.find(audio => audio.url === url).name
    document.getElementById('display').innerHTML = audioName
  }


  // const handleKeyDown = (e) => {
  //   const keyPressed = e.key.toLowerCase()
  //   audioUrl.find((audio) => {
  //     if(audio.letter.toLowerCase() === keyPressed){
  //       playAudio(audio.url)
  //     }
  //   })
  // }
  const handlePowerState = () => {
    const display = document.getElementById('display')
    const buttons = document.querySelectorAll('button')
   
    if(isOff){
      buttons.forEach(button => button.disabled = isOff)
      // document.removeEventListener('keydown', handleKeyDown);
      display.innerHTML = ''
    }else{
      buttons.forEach(button => button.disabled = false);
      // document.addEventListener('keydown', handleKeyDown);
    }
    setIsOff(!isOff)
  }

  
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-blue-950 text-white" >
        <h1 className="text-2xl shadow-md font-bold font-serif mb-3">Drum Machine</h1>
         <div id="drum-machine" className="bg-blue-900 flex flex-col p-5  mb-2 rounded mx-auto shadow-lg md:w-2/4 md:flex-row">
             <div className=" container grid grid-cols-3 gap-4">
               {audioUrl.map((audio, index) => (
                  <div key={index + 1}>
                      <button id={index + 1} className="drum-pad px-3 py-2 bg-blue-600 w-20 h-16 rounded shadow-xl text-white font-bold
                      " 
                      onClick={() => playAudio(audio.url)}
                      
                      >
                      <audio id={audio.letter} className="clip" src={audio.url}></audio>
                      {audio.letter}
                      </button>
                  </div>
               ))}
             </div>
             <div className="text-white font-serif mx-auto flex flex-col  items-center gap-4">
                <h5 className="mt-5">Power</h5>
                <div className="relative bg-blue-950 w-16 h-8 rounded-full flex items-center">
                  {isOff ? (<div className="ml-1">Off</div>) : (<div className="ml-9">On</div>) } 
                  <div className="bg-white w-6 h-6 rounded-full absolute cursor-pointer"
                    style={{left: isOff ? "auto" : '3px', right: isOff ? "3px" : "auto", }}
                    onClick={handlePowerState}
                  />
                </div>
                <div  id="display" className="bg-blue-950 text-white w-28 h-10 flex items-center justify-center text-xl"></div>
                <label htmlFor="volume">{volume}</label>
                <input type="range" min={0} max={100} id="volume" name="volume"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                />
             </div>
            
         </div>
      </div>
    </>
  )
}

export default App


const audioUrl = [
  {
    name: "Heater 1",
    letter: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    name: "Heater 2",
    letter: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    name: "Heater 3",
    letter: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    name: "Heater 4",
    letter: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    name: "Clap",
    letter: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    name: "Open-HH",
    letter: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    name: "Kick-n'-Hat",
    letter: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    name: "Kick",
    letter: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    name: "Closed-HH",
    letter: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
]