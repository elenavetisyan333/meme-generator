import { useEffect, useState } from 'react'
import './App.css'
import { memeTypes } from './MemeTypes'

function App() {
  const [topText, setTopText] = useState("Top Text");
  const [bottomText, setBottomText] = useState("Bottom Text");
  const [meme, setMeme] = useState(memeTypes[0].value);
  const [link,setLink] = useState("");

  function generate(e){
    e.preventDefault();
    setLink(`https://apimeme.com/meme?meme=${meme}&top=${topText}&bottom=${bottomText}`);
  }
  
  return (
    <div id='content'>
      <form id="info" onSubmit={generate}>
        <h1>Meme Generator</h1>

        <label htmlFor="memeType">Meme</label>
        <select name="memeType" id="memeType" value={meme} onChange={(e) => setMeme(e.target.value)}>
          {
            memeTypes.map(meme =>{
              return <option value={meme.value} key={meme.value}> {meme.label} </option>
            })
          }
        </select>

        <label htmlFor="topText">Top Text</label>
        <input type="text" name="topText" id="topText" placeholder="This text will appear on the top" value={topText} onChange={(e) => setTopText(e.target.value)} />

        <label htmlFor="bottomText">Bottom Text</label>
        <input type="text" name="bottomText" id="bottomText" placeholder="This text will appear on the bottom" value={bottomText} onChange={(e) => setBottomText(e.target.value)} />
        
        <button>Generate</button>
      </form>

        {
          link != "" ? <img src={link} alt="meme" width={400} height={400} /> : ""
        } 
    </div>
  )
}

export default App
