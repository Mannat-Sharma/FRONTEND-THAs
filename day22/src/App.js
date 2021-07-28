import './App.css';
import {useState, useEffect} from 'react';
import Templates from './components/templates';
import Meme from './components/meme';

function App() {
  const memeUrl = "https://api.imgflip.com/get_memes";
  const [meme, setMeme] = useState(null)
  const [temp, setTemp] = useState([]);
  useEffect(() => {
    fetch(memeUrl)
    .then((response) => response.json())
    .then((data) => {
      setTemp(data.data.memes)
      console.log(data.data.memes)
    })
  }, []);
  return (
    <div className="App">
      <h1>MeMe GeNeRaToR</h1>
      {meme === null ? (<Templates temp={temp} setMeme = {setMeme}/>) : (<Meme meme={meme} setMeme={setMeme}/>)}
    </div>
  );
      }
export default App;
