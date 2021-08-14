import './App.css';
import {useState, useEffect} from 'react'; 
function App() {
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({})
  const updatePlaceData = () => {
      fetch(`http://api.weatherapi.com/v1/current.json?key=2e3ab97f41a543e6a0c143233211108&q=${place}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setPlaceData(data)
      })
    }
  return (
    <>
    <input type = "text" placeholder="Search Location" value={place} onChange={(e) => {setPlace(e.target.value)}}/>
    <button onClick = {updatePlaceData}>Search</button>
    <div className="App">
      <div className="container">
          {placeData.location? (
            <>
            <div className="weather">
              <div className="condition">
              <img src={placeData.current.condition.icon} alt=""/>
              <h4>{placeData.current.condition.text}</h4>
              <h1>{placeData.current.temp_c}<span style={{fontWeight:"lighter"}}>°</span></h1>
            </div>
            </div>
            <div>
              <div className="conditions">
                <h1>{placeData.location.name}</h1>
                <div className="wind">
                  <div>
                    <h2>{placeData.current.wind_kph} KM</h2>
                    <p>Wind Now</p>
                  </div>
                  <div>
                    <h2>{placeData.current.humidity} %</h2>
                    <p>Humidity</p>
                  </div>
                  <div>
                    <h2>{placeData.current.precip_mm} MM</h2>
                    <p>Precipitation</p>
                  </div>
                  </div>
             </div>
          </div>
            </>
          ):(
          <h1 style={{textAlign:"center"}}>Place Not Found</h1>
          )}
          
          </div>
        </div>
    </>
  );
}

export default App;
